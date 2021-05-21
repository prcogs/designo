import { useEffect } from "react";

const token = process.env.API_KEY_MAP

const MapProvider = ({ children }) => {

   useEffect(() => {
      const timer = setTimeout(() => {
         createMap("mapid0", [43.643694, -79.580405], token)
         createMap("mapid1", [-30.3290675,149.7883872], token)
         createMap("mapid2", [51.7223,-3.8501], token)
      }, 500)

      return () => clearTimeout(timer)
      
    },[])

   return(
      <>
         {children}
      </>
   )
}

const createMap = (id, pos, token, mapRef) => {
   
   var mymap = L.map(id).setView(pos, 13);
   var marker = L.marker(pos).addTo(mymap);
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 18,
         id: 'mapbox/streets-v11',
         tileSize: 512,
         zoomOffset: -1,
         accessToken: token
      }).addTo(mymap);
}

export default MapProvider