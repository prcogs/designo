import { useEffect } from "react";
import MapProvider from "./mapProvider";


const AllLocations = ({ dataLocations }) => {
   
   return(
      <div className="locations__allLocations">
         <MapProvider>
            {dataLocations.map((location, i) => {
               return <Location location={location} id={i} key={i}/>
            })}
         </MapProvider>
      </div>
   )
}

export const Location = ({ location, id }) => {
   
   return(
      <div className="locations__location">
         <div id={"mapid" + id} className="mapid"></div>
         <div className="locations__locationContainer">
            <h2>{location.country}</h2>
            <div className="locations__locationWrapper">
               <div className="locations__location__adress">
                  <p>{location.name}</p>
                  <p>{location.adress}</p>
                  <p>{location.city}</p>
               </div>

               <div className="locations__location__contact">
                  <p>Contact</p>
                  <p>P : {location.tel}</p>
                  <p>M : {location.mail}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AllLocations