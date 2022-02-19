#!/bin/sh
#
# Copyright (C) 2016-2021 phantombot.github.io/PhantomBot
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

#
# PhantomBot Launcher - BSD
#
# Please run the following to launch the bot, the chmod is required only once.
# % chmod +x launch.sh
# % ./launch.sh
#
# You can also specify a custom path to the Java executable as the first parameter, using java=PATH
# ex: ./launch.sh java=/usr/local/jdk-11/bin/java
#

unset DISPLAY

tmp=""

JAVA=$(which java 2>/dev/null)

if [ "$JAVA" -eq "" ]; then
    JAVA=$(which /usr/local/*11*/bin/java)
fi

if [ -e "$1" ]; then
    n=0
    IFS="="
    for v in $1
    do
        n=`expr $n + 1`
        if expr "$v" : '.* .*' > /dev/null
        then
            z="var$n=\"$v\""
        else
            z="var$n=$v"
        fi
        eval "$z"
    done

    if [ "$var1" =~ "java" && -e "$var2" ]; then
        JAVA="$var2"
        $1=$2
    fi
fi

jvermaj=$($JAVA --version | awk 'FNR == 1 { print $2 }' | cut -d . -f 1)

if [ $jvermaj -lt 11 ]; then
    echo "PhantomBot benötigt zur Ausführung Java 11 oder höher."
    echo

    osdist=$(uname)

    if  [[ "$osdist" == *"OpenBSD"* ]]; then
        echo "Bitte installiere das Paket jdk und wähle die Version aus, die dir jdk-11 gibt"
        echo

        echo "Der Befehl dazu lautet:"
        echo "   pkg_add jdk"
        echo
        echo "Wenn Sie den Befehl pkg_add ausführen, wähle die Option, die mit java-11 beginnt"
    elif  [[ "$osdist" == *"FreeBSD"* ]]; then
        echo "Bitte installiere das Paket openjdk11"
        echo

        echo "Der Befehl dazu lautet:"
        echo "   sudo pkg install openjdk11"
    else
        echo "Unbekanntes Betriebssystem erkannt, bitte identifizieren und installiere das entsprechende Java 11-Paket auf Ihrem System"
        echo "Der Name beginnt im Allgemeinen mit JDK oder OpenJDK"
    fi

    echo
    echo "Wenn du es bereits installiert hast, versuche, den Pfad zur ausführbaren Java-Datei als Parameter für dieses Skript anzugeben"
    echo "Beispiel: ./launch.sh java=/usr/local/jdk-11/bin/java"

    exit 1
fi

${JAVA} --add-exports java.base/sun.security.x509=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED ${tmp} -Duser.language=en -Djava.security.policy=config/security -Dinteractive -Xms1m -Dfile.encoding=UTF-8 -jar PhantomBotDE.jar ${1}