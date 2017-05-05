var mymap = L.map('mapid').setView([29.653, -82.334], 15
);

// Leaflet markers in different colors came from this github repo https://github.com/pointhi/leaflet-color-markers
var redIcon = new L.Icon({
	iconUrl: 'images/marker-icon-2x-red.png',
	shadowUrl: 'images/marker-shadow-red.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});


var orangeIcon = new L.Icon({
	iconUrl: 'images/marker-icon-2x-orange.png',
	shadowUrl: 'images/marker-shadow-orange.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'gabriellecalise.24f0ci3n',
    accessToken: 'pk.eyJ1IjoiZ2FicmllbGxlY2FsaXNlIiwiYSI6ImNpdmthaGE1bzA5M2Eyem82aDlqbjBtNmwifQ.S4N8HmxbsrS_NKezvlWuAQ'
}).addTo(mymap);



// to add a different icon for the popup, I used this tutorial  http://leafletjs.com/examples/custom-icons/. Don't forget to import the image for your new icon into the images folder!!!

var marker1= L.marker([29.652107, -82.340999], {icon: redIcon}).addTo(mymap)
	 .bindPopup("<b>Dough Religion and ooZoo Bar</b><br>1404 W. University Ave. #20").openPopup();

var marker2= L.marker([29.652039, -82.333472], {icon: redIcon}).addTo(mymap)
	.bindPopup("<b>The Jam</b><br>817 W. University Ave.")

var marker3=L.marker([29.651862, -82.333455], {icon: orangeIcon}).addTo(mymap)
	.bindPopup("<b>Addiction Tattoos &amp; Piercing</b><br>819 W. University Ave.")

var marker4=L.marker([29.652424, -82.340685]).addTo(mymap)
		.bindPopup("<b>The Standard</b><br>1404 W. University Ave. <br>   Some businessowners on University Ave. blame the construction of the Standard for losses in revenue. The construction of the luxury apartment complex has been loud, dusty and uninviting, said Randy Akerman of Burrito Brothers.")

var marker5=L.marker([29.649150, -82.323666]).addTo(mymap)
		.bindPopup("<b>Maude's Cafe</b><br>101 SE 2nd Place")

var marker6=L.marker([29.652295, -82.337854], {icon: redIcon}).addTo(mymap)
		.bindPopup("<b>BurgerQue</b><br>1220 W. University Ave.")



var marker7=L.marker([29.649150, -82.323666]).addTo(mymap)
		.bindPopup("<b>Maude's Cafe</b><br>101 SE 2nd Place")

var marker8=L.marker([29.652300,-82.341000], {icon: redIcon}).addTo(mymap)
    	.bindPopup("<b>Burrito Brothers</b><br>1402 W. University Ave.")

var marker9=L.marker([29.652479, -82.337366]).addTo(mymap)
      .bindPopup("<b>McDonald's</b><br>1220 W. University Ave.")
