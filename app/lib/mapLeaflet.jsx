const API_KEY_MAP = process.env.local.API_KEY_MAP

const mapLeaflet = () => {
   var mymap0 = L.map('mapid0').setView([43.643694, -79.580405], 13);
   var marker0 = L.marker([43.643694, -79.580405]).addTo(mymap0);

   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1IjoiZmxvcmlhbmYiLCJhIjoiY2s5am8yaW83MDBtdzNmdWh1aGR6ZHJzdyJ9.gIbTpGVfCx8TAaZpl6FT6w"
   }).addTo(mymap0);
}