$(document).ready(function() {
			

	var map = L.map('map').setView([40.2838, -3.8215], 16);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //para mapquest: http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);
		var marker = L.marker([40.2838,-3.8215]).addTo(map);
	marker.bindPopup("<b>Estas aqui. </b>").openPopup();
	map.on('click', function(e) {

		L.marker(e.latlng).addTo(map).bindPopup("coords: "+e.latlng).openPopup();

	});


});
