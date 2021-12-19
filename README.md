## PhantomBotDE wird nicht von PhantomBot selbst betrieben und supportet.
### PhantomBot selbst bietet hier für keine Hilfe an!

# <img alt="PhantomBotDE" src="/.github/logo.png" width="600px"/>

| Versionen | |
|--------------|---|
| PhantomBot   | [![](https://img.shields.io/github/release/phantombot/phantombot.svg?style=for-the-badge)](https://github.com/PhantomBot/PhantomBot/releases/latest) |
| PhantomBotDE | [![](https://img.shields.io/github/release-pre/PhantomBotDE/PhantomBotDE.svg?style=for-the-badge)](https://github.com/PhantomBotDE/PhantomBotDE/releases/latest) |

![Java CI](https://github.com/PhantomBotDE/PhantomBotDE/workflows/Java%20CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e78b35af8f2442d7a8c5040c41164739)](https://www.codacy.com/gh/PhantomBot/PhantomBot/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PhantomBot/PhantomBot&amp;utm_campaign=Badge_Grade)
[![GitHub license](https://img.shields.io/github/license/PhantomBotDE/PhantomBotDE)](https://github.com/PhantomBot/PhantomBot/blob/master/LICENSE)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/PhantomBotDE/PhantomBotDE?sort=semver)](https://github.com/PhantomBotDE/PhantomBotDE/releases/latest)
**PhantomBotDE** ist ein Twitch Chat-Bot powered by Java.
PhantomBot hat viele moderne Eigenschaften standardmäßig, wie zum Beispiel ein eingebautes Webpanel, verbesserte Moderation, Minispiele für den Chat, ein Punktesystem, Verlosungen, benutzerdefinierte Befehle, einen Musikpalyer mit Songrequest Funktion [und mehr](https://phantombot.tv/features)! PhantomBotDE kann mit vielen Services verbunden werden, wie  [Discord](https://discordapp.com/), [Twitter](https://twitter.com), [GameWisp](https://gamewisp.com), [TipeeeStream](https://tipeeestream.com), [StreamLabs](https://streamlabs.com) und [StreamElements](https://streamelements.com)!


Dies ist der deutsche Fork von PhantomBotDE, wir übersetzten immer die neuste Version sobald die größten Bugs behoben sind.

Zusätzliche Funktionalität wird durch die Verwendung von [Community erstellten Modulen](https://community.phantombot.tv/c/custom-modules) ermöglicht.

<u>**Bitte beachtet das die ursprünglichen Entwickler keinen Support für PhantomBotDE anbieten (können).**</u>

## Links zum ursprünglichen englischen PhantomBot
* [Get PhantomBot](https://phantom.bot/ "PhantomBot")
*[Security Policy](https://github.com/PhantomBot/PhantomBot/blob/master/SECURITY.md)
* [Documentation & Installation Instructions](https://phantom.bot/guides/ "Doumenation and Installation Instructions")
* [Follow us on Twitter](https://www.twitter.com/PhantomBot "PhantomBot Twitter")
* [Discord Server](https://discord.com/invite/YKvMd78 "PhantomBot Discord Server")

## Wie kann ich folgen/mitmachen?

* Schau dir unsere [Versionshistorie](https://github.com/PhantomBotDE/PhantomBotDE/releases) an.
* Wenn du ein Entwickler bist, kannst dir den Quellcode ansehen und Pull-Requests einreichen. Wir stellen dir einen [Leitfaden](https://github.com/PhantomBot/PhantomBot/blob/master/development-resources/DEVSETUP.md) zur Einrichtung deiner Entwicklungsumgebung zur Verfügung.
* Bitte vergesse nicht einen **watch** dazulassen, und unserem **Repo einen Stern zu geben**!
* Ein großes Dankeschön geht raus an die Leute [die zu dem Projekt beigetragen haben](https://github.com/PhantomBotDE/PhantomBotDE/graphs/contributors).

## Vorraussetzungen

PhantomBotDE erfordert die Installation der folgenden Software:

ARM (Raspberry Pi) oder x86 (32-bit) Architekturen
* [Adoptium Temurin 11] (https://adoptium.net/) oder [OpenJDK 11](https://openjdk.java.net/)

x86_64 (64-bit) Architekturen
* Keine Voraussetzungen

## Installation
Bitte lesen Sie die plattformspezifische Installationsdokumentation.
* [Windows](https://phantombot.github.io/PhantomBot/guides/#guide=content/setupbot/windows)
* Linux:
  * [Ubuntu 16.04](https://phantombot.github.io/PhantomBot/guides/#guide=content/setupbot/ubuntu)
  * [CentOS 7](https://phantombot.github.io/PhantomBot/guides/#guide=content/setupbot/centos)
* [macOS](https://phantombot.github.io/PhantomBot/guides/#guide=content/setupbot/macos)

Detaillierte Upgrade-Anweisungen finden Sie in unserer [Dokumentation](https://phantombot.github.io/PhantomBot/guides/#guide=content/setupbot/updatebot).

## License

PhantomBotDE ist lizensiert unter der [**GNU General Public License v3 (GPL-3)**](https://www.gnu.org/copyleft/gpl.html).

## Rollbar-Ausnahmeberichte
:information_source: ***Hinweis:*** Ab Phantombot Nightly Build 49687f9 (4. Juli 2021) und PhantomBot v3.5.0 verwenden wir nun [Rollbar](https://rollbar.com), um dem Entwicklerteam automatisch Ausnahmen zu melden.

OAuth-Token, Client-IDs und API-Secrets werden **NICHT** gesendet. Alle Informationen werden vertraulich behandelt.

Daten werden nur gesendet, wenn eine Ausnahme auftritt. Einige sehr häufige, sicher zu ignorierende Ausnahmen werden nicht gesendet, z. B. die, die beim Herunterfahren des Bots auftreten, während eine aktive Panel-Verbindung besteht.

Ausnahmen werden über einen Server im Besitz von @gmt2001 zur zusätzlichen Filterung gesendet, bevor mit Rollbar fortgefahren wird. Außer den normalen Protokollen, die zur DDOS-Abwehr verwendet werden, werden auf diesem Server keine Daten gespeichert. Diese Protokolle können IP-Adressen enthalten und werden nach 5 Wochen gelöscht. IP-Adressen werden **NICHT** an Rollbar gesendet.

Die folgenden Werte werden von _botlogin.txt_ gesendet:
- _allownonascii_ - Gibt an, ob andere Konfigurationswerte in _botlogin.txt_ Nicht-US-ASCII-Zeichen verwenden dürfen
- _baseport_ - Gibt den Port an, auf dem der integrierte Webserver lauscht
- _channel_ - Gibt den Kanal des Senders an, in dem der Bot mit Twitch-Zuschauern interagiert
- _datastore_ - Gibt an, welches Datenbank-Backend verwendet wird
- _debugon_ - Gibt an, ob Debug-Meldungen an die Konsole ausgegeben und protokolliert werden
- _debuglog_ - Überschreibt das obige, um nur zu protokollieren, aber nicht auf der Konsole zu drucken
- _helixdebug_ - Ermöglicht zusätzliches Debug-Logging von Twitch Helix API-Anfragen und -Antworten (OAuth-Token nicht eingeschlossen)
- _ircdebug_ - Ermöglicht zusätzliches Debug-Logging von eingehenden Nachrichten vom Twitch Message Interface (TMI/IRC)
- _logtimezone_ - Gibt die vom Bot verwendete Zeitzone an
- _msglimit30_ - Gibt das selbst auferlegte Ratenlimit für ausgehende Nachrichten an TMI . an
- _musicenable_ - Gibt an, ob der YouTube-Player auf der Ebene _botlogin.txt_ aktiviert wurde
- _owner_ - Gibt den Bot-Eigentümer an (wird verwendet, um einem Nicht-Broadcaster-Bot-Besitzer Administratorrechte zu erteilen)
- _proxybypasshttps_ - Überschreibt die SSL-Prüfungen im Bot, um vorzugeben, dass SSL aktiviert ist, für die Verwendung mit einem Reverse-Proxy
- _reactordebug_ - Ermöglicht eine sehr ausführliche Debug-Ausgabe an die Konsole vom Netty-Backend (Helix und Discord API)
- _reloadscripts_ - Gibt an, ob der Bot die meisten JavaScript-Dateien neu laden darf, wenn sie ohne Neustart geändert werden
- _rhinodebugger_ - Aktiviert ausführliche Debug-Ausgabe, wenn JavaScript-Ausnahmen auftreten
- _rollbarid_ - Eine [GUIDv4](https://en.wikipedia.org/wiki/GUID#Version_4_(random)), die die aktuelle PhantomBot-Installation eindeutig identifiziert und zur Identifizierung verwendet wird, wenn mehrere Ausnahmen von demselben Bot kommen
- _twitch\_tcp\_nodelay_ - Das TCP_NODELAY-Flag für TMI. Macht TMI weniger bandbreiteneffizient, aber möglicherweise etwas schneller bei ausgehenden Nachrichten
- _usehttps_ - Gibt an, ob SSL auf dem integrierten Webserver des Bots aktiviert ist
- _user_ - Der Twitch-Benutzername des Bots
- _useeventsub_ - Gibt an, ob EventSub aktiviert ist
- _userollbar_ - Gibt an, ob die Rollbar-Ausnahmeberichte aktiviert sind
- _webenable_ - Gibt an, ob der integrierte Webserver des Bots aktiviert ist
- _whisperlimit60_ - Gibt das selbst auferlegte Ratenlimit für ausgehende Flüstersignale an TMI . an
- _wsdebug_ - Aktiviert die Debug-Ausgabe von WebSocket-Nachrichten vom Panel

Bei allen anderen Werten in _botlogin.txt_ wird nur ein Hinweis gesendet, ob der Wert existiert, nicht aber der tatsächliche Wert selbst.

Zu den weiteren gesendeten Daten gehören:
- _java.home_ - Gibt an, wo Java installiert ist
- _java.specification.name_ - Gibt die Spezifikation der Java Runtime Environment an, die die Java-Installation einhält
- _java.specification.vendor_ - Gibt den Anbieter der obigen Spezifikation an
- _java.specification.version_ - Gibt die Version der obigen Spezifikation an
- _java.vendor_ - Gibt den Hersteller der aktuellen Java-Installation an
- _java.version_ - Gibt die aktuelle Version der Java-Installation an
- _os.arch_ - Zeigt 32-Bit- oder 64-Bit-Betriebssystem an
- _os.name_ - Gibt den Namen des Betriebssystems an
- _os.version_ - Gibt die Version des Betriebssystems an
- Der aktuelle Status von _debugon_, auch wenn er über die Konsole eingestellt wurde
- Der aktuelle Status von _debuglog_, auch wenn von der Konsole aus eingestellt
- Ein boolescher Indikator dafür, ob das OAuth als Bot eingeloggt ist (aber nicht das eigentliche OAuth-Token)
- Ein boolescher Indikator dafür, ob das API OAuth als Broadcaster angemeldet ist (aber nicht das eigentliche OAuth-Token)
- Der vollständige Stack-Trace der Ausnahme

Um die Meldung von Rollbar-Ausnahmen zu deaktivieren, fügen Sie der _botlogin.txt_ die folgende Zeile hinzu:
```
userollbar=false
```

Docker-Benutzer können sich mit der oben genannten Methode abmelden oder dem Container die folgende Umgebungsvariable hinzufügen:
```
PHANTOMBOT_USEROLLBAR=false
```

for docker-compose.yml
```
PHANTOMBOT_USEROLLBAR: "false"
```

Du musst den Bot neu starten, nachdem du das Opt-out aktiviert hast, damit die Änderung wirksam wird. Das Bearbeiten eines Docker-Containers oder docker-compose erfordert möglicherweise weitere Schritte, um die Änderungen zu übernehmen. Konsultieren das Handbuch

Wenn Sie glauben, dass Ihre Daten bereits gesendet wurden und eine GPDR-Löschanfrage stellen möchten, melden Sie sich bitte wie oben an und senden Sie dann Ihren Botnamen, Sendernamen und die _rollbarid_ von _botlogin.txt_ an: **gpdr** /A\T/ phantombot // hopto \\ org

Wir akzeptieren auch Anfragen nach Kopien Ihrer Daten. GDPR-Anfragen werden von allen Benutzern akzeptiert, auch von denen, die nicht in einem Gebietsschema leben, das solche Gesetze hat.

Bitte beachten Sie, dass die IP-Adressen in den DDOS-Logs nicht manuell abgerufen oder gelöscht werden können, sondern nach 5 Wochen durch Log-Rotation automatisch gelöscht werden.
