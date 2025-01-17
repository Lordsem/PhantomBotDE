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

$.lang.register('queuesystem.open.error.opened', 'Eine Warteschlange ist bereits geöffnet!');
$.lang.register('queuesystem.open.error.usage', 'Verwendung: !queue open [Größe] [Titel] - Gib bei der Größe 0 an um die Warteschlange endlos zu erstellen.');
$.lang.register('queuesystem.open.usage', 'Verwendung: !queue open [Größe] [Titel]');
$.lang.register('queuesystem.open.error.clear', 'Die vorherige Warteschlange wurde noch nicht bereinigt. Verwende "!queue clear" um sie zu bereinigen.');
$.lang.register('queuesystem.open.normal', 'Die Warteschlange ist nun geöffnet! Verwende !joinqueue um ihr beizutreten! Titel: $1');
$.lang.register('queuesystem.open.limit', 'Die Warteschlange ist nun geöffnet! Maximale Anzahl an Einträgen: $1 Teilnehmende. Verwende "!joinqueue [Optional Gamertag]" um beizutreten! Titel: $2');
$.lang.register('queuesystem.close.error', 'Derzeit ist keine Warteschlange geöffnet!');
$.lang.register('queuesystem.close.success', 'Die Warteschlange ist nun geschlossen!');
$.lang.register('queuesystem.clear.success', 'Die Warteschlange wurde zurückgesetzt und bereinigt.');
$.lang.register('queuesystem.join.error.joined', 'Du bist bereits in der Warteschlange!');
$.lang.register('queuesystem.join.error.full', 'Die Warteschlange ist derzeit voll.');
$.lang.register('queuesystem.remove.usage', 'Verwendung: !queue remove [Benutzername]');
$.lang.register('queuesystem.remove.404', 'Diese Person scheint nicht in der Warteschlange zu sein!');
$.lang.register('queuesystem.remove.removed', '$1 wurde aus der Warteschlange entfernt!');
$.lang.register('queuesystem.info.success', 'Aktuelle Warteschlangen Informationen: Titel: [$1], Einträge: [$2], Max. Größe: [$3], Eröffnet um: [$4]');
$.lang.register('queuesystem.time.info', '(vor $1)');
$.lang.register('queuesystem.position.self', 'eine aktuelle Position in der Warteschlange ist #$1 und du tratst bei: $2');
$.lang.register('queuesystem.position.self.error', 'Du bist aktuell nicht in der Warteschlange.');
$.lang.register('queuesystem.position.other', '$1 ist aktuell auf der Position #$2 der Warteschlange und du tratst bei: $3');
$.lang.register('queuesystem.position.other.error', '$1 ist aktuell nicht in der Warteschlange.');
$.lang.register('queuesystem.queue.list', 'Aktuelle Warteschlangenliste: $1.');
$.lang.register('queuesystem.queue.list.limited', 'Aktuelle Warteschlange: $1. (Anti-Spam +$2)');
$.lang.register('queuesystem.queue.list.empty', 'Es sind keine Personen in der Warteschlange!');
$.lang.register('queuesystem.queue.next', 'Nächste Person/en: $1');
$.lang.register('queuesystem.gamertag', '(Gamertag: $1)');
$.lang.register('queuesystem.pick', 'Gewählte Person/en: $1');
$.lang.register('queuesystem.usage', 'Verwendung: !queue [open / close / clear / next / list / pick / random / position / info]');
