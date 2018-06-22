var map;
function initMap() {
	var map = document.getElementById('map');

	map.style.width = (window.innerWidth-20) + "px";

    map = new google.maps.Map(map, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}