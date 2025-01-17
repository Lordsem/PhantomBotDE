/*
 * Copyright (C) 2016-2021 phantombot.github.io/PhantomBot
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package tv.phantombot.twitch.irc.chat.utils;

import java.util.Date;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;
import org.java_websocket.exceptions.WebsocketNotConnectedException;
import tv.phantombot.PhantomBot;
import tv.phantombot.twitch.api.TwitchValidate;
import tv.phantombot.twitch.irc.TwitchSession;

public class MessageQueue implements Runnable {

    private final BlockingDeque<Message> queue = new LinkedBlockingDeque<>();
    private final String channelName;
    private final Thread thread;
    private TwitchSession session;
    private boolean isAllowedToSend = false;
    private boolean isKilled = false;
    private int writes = 0;
    private final Date nextReminder = new Date();
    private final long REMINDER_INTERVAL = 300000L;

    /**
     * Class constructor.
     *
     * @param {String} channelName
     */
    public MessageQueue(String channelName) {
        this.channelName = channelName;

        // Set the default thread uncaught exception handler.
        Thread.setDefaultUncaughtExceptionHandler(com.gmt2001.UncaughtExceptionHandler.instance());

        // Start a new thread for our final queue.
        this.thread = new Thread(this, "tv.phantombot.wschat.twitch.chat.utils.MessageQueue::run");
        this.thread.setUncaughtExceptionHandler(com.gmt2001.UncaughtExceptionHandler.instance());
        this.thread.setPriority(Thread.MAX_PRIORITY);

    }

    /**
     * Method that starts this queue.
     *
     * @param {TwitchSession} session
     */
    public void start(TwitchSession session) {
        // Set the session.
        this.session = session;
        // Start the write thread.
        this.thread.start();
    }

    /**
     * Method that sets if we are allowed to send messages.
     *
     * @param {boolean} isAllowedToSend
     */
    public synchronized void setAllowSendMessages(boolean isAllowedToSend) {
        this.isAllowedToSend = isAllowedToSend;
    }

    /**
     * Method that says if we are allowed to send messages.
     *
     * @return {boolean} isAllowedToSend
     */
    public boolean getAllowSendMessages() {
        return this.isAllowedToSend;
    }

    /**
     * Method that returns the amount of messages we've sent in 30 seconds.
     *
     * @return {int} writes
     */
    public int getWrites() {
        return this.writes;
    }

    /**
     * Method that adds a message to the end of the queue.
     *
     * @param {String} message
     */
    public void say(String message) {
        message = message.replace('\r', ' ');
        String[] spl = message.split("\n");
        for (String str : spl) {
            queue.add(new Message(str));
        }
    }

    /**
     * Method that adds a message to the top of the queue.
     *
     * @param {String} message
     */
    public void sayNow(String message) {
        message = message.replace('\r', ' ');
        String[] spl = message.split("\n");
        for (int i = spl.length; i > 0; i--) {
            queue.addFirst(new Message(spl[i - 1], spl[i - 1].startsWith(".")));
        }
    }

    /**
     * Method that handles sending messages to Twitch from our queue.
     */
    @Override
    public void run() {
        long lastWrite = System.currentTimeMillis();
        long nextWrite = System.currentTimeMillis();
        double limit = PhantomBot.getMessageLimit();

        while (!isKilled) {
            try {
                // Get the next message in the queue.
                Message message = queue.take();

                // Set the time we got the message.
                long time = System.currentTimeMillis();

                // Make sure we're allowed to send messages and that this one can be sent.
                if (isAllowedToSend && (nextWrite < time || (message.hasPriority() && writes <= 99))) {
                    if (lastWrite > time) {
                        if (writes >= limit && !message.hasPriority()) {
                            nextWrite = (time + (lastWrite - time));
                            com.gmt2001.Console.warn.println("Nachrichtenlimit von (" + limit + ") wurde erreicht. Nachrichten werden wieder gesendet in " + (nextWrite - time) + "ms");
                            continue;
                        }
                        writes++;
                    } else {
                        writes = 1;
                        lastWrite = (time + 30200);
                    }

                    // Send the message.
                    session.sendRaw("PRIVMSG #" + this.channelName + " :" + message.getMessage());
                    com.gmt2001.Console.out.println("[CHAT] " + message.getMessage());
                }

                if (new Date().after(nextReminder)) {
                    if ((!isAllowedToSend || TwitchValidate.instance().hasOAuthInconsistencies(PhantomBot.instance().getBotName()))) {
                        com.gmt2001.Console.warn.println("WARNUNG: Letzte Nachricht kann aufgrund eines Konfigurationsfehlers nicht gesendet werden");

                        TwitchValidate.instance().checkOAuthInconsistencies(PhantomBot.instance().getBotName());

                        if (!isAllowedToSend) {
                            com.gmt2001.Console.warn.println("WARNUNG: Darf kein Moderator sein");
                        }
                    }

                    nextReminder.setTime(new Date().getTime() + REMINDER_INTERVAL);
                }
            } catch (WebsocketNotConnectedException ex) {
                com.gmt2001.Console.err.println("Die Nachricht konnte nicht gesendet werden, da die Verbindung zum Twitch IRC getrennt wurde.");
                this.setAllowSendMessages(false);
                session.reconnect();
            } catch (InterruptedException ex) {
                com.gmt2001.Console.err.printStackTrace(ex);
            }
        }
    }

    /**
     * Method that kills this instance.
     */
    public void kill() {
        this.isKilled = true;
    }
}
