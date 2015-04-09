$(document).ready(function() {
	//$("#geo").click(showPosition);
	
//lambda18.aulas.gsyc.es:8000
	//function getLocation(){
		/*if(navigator.geolocation){
 			navigator.geolocation.getCurrentPosition(showPosition);
		}else{
 			$("#info").text("Geolocation is not supported by this browser.");
		}*/

	//	function showPosition(position) {
			//$("#info").text("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
			

			var map = L.map('map').setView([40.2838, -3.8215], 16);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //para mapquest: http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map);
				var marker = L.marker([40.2838,-3.8215]).addTo(map);
			marker.bindPopup("<b>Estas aqui. </b>").openPopup();
			map.on('click', function(e) {
    				//alert(e.latlng);
  				//marker.bindPopup(e.latlng.toString()).openPopup();
				L.marker(e.latlng).addTo(map).bindPopup("coords: "+e.latlng).openpopup();
				//L.circle(e.latlng, radius).addTo(map);
			});
		//}
	//}

});
