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

// Function that querys all of the data we need.
$(function() {
	socket.getDBTableValues('get_all_raids', 'incoming_raids', function(results) {
		let raids = [];

		for (let i = 0; i < results.length; i++) {
			let json = JSON.parse(results[i].value);

			raids.push([
				results[i].key,
				new Date(parseInt(json.lastRaidTime)).toLocaleString(),
				helpers.getDefaultIfNullOrUndefined(json.lastRaidViewers, '0'),
				helpers.getDefaultIfNullOrUndefined(json.totalRaids, '1'),
				helpers.getDefaultIfNullOrUndefined(json.totalViewers, '0'),
				parseInt(json.lastRaidTime)
			]);
		}

        // if the table exists, destroy it.
        if ($.fn.DataTable.isDataTable('#raidHistoryTable')) {
            $('#raidHistoryTable').DataTable().destroy();
            // Remove all of the old events.
            $('#raidHistoryTable').off();
        }

		// Create table.
		$('#raidHistoryTable').DataTable({
			'searching': true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"
            },
			'autoWidth': false,
			'data': raids,
			'columnDefs': [
    			{ 'width': '20%', 'targets': 0 }
    		],
			'columns': [
				{ 'title': 'Benutzername' },
				{ 'title': 'Letzter Raid', 'orderData': [5] },
				{ 'title': 'Zuschauer' },
				{ 'title': 'Gesamte Raids' },
				{ 'title': 'Gesamte Zuschauer' },
                { 'visible': false }
			]
		});
	});

    socket.getDBTableValues('get_all_out_raids', 'outgoing_raids', function(results) {
        let raids = [];

        for (let i = 0; i < results.length; i++) {
            let json = JSON.parse(results[i].value);

            raids.push([
                results[i].key,
                new Date(parseInt(json.lastRaidTime)).toLocaleString(),
                helpers.getDefaultIfNullOrUndefined(json.lastRaidViewers, '0'),
                helpers.getDefaultIfNullOrUndefined(json.totalRaids, '1'),
                helpers.getDefaultIfNullOrUndefined(json.totalViewers, '0'),
            ]);
        }

        // if the table exists, destroy it.
        if ($.fn.DataTable.isDataTable('#outRaidHistoryTable')) {
            $('#outRaidHistoryTable').DataTable().destroy();
            // Remove all of the old events.
            $('#outRaidHistoryTable').off();
        }

        // Create table.
        $('#outRaidHistoryTable').DataTable({
            'searching': true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"
            },
            'autoWidth': false,
            'data': raids,
            'columnDefs': [
                { 'width': '20%', 'targets': 0 }
            ],
            'columns': [
                { 'title': 'Benutzername' },
                { 'title': 'Letzter Raid', 'orderData': [1] },
                { 'title': 'Zuschauer' },
                { 'title': 'Gesamte Raids' },
                { 'title': 'Gesamte Zuschauer' }
            ]
        });
    });
});
