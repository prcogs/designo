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
   const { country, name, adress, city, tel, mail} = location

   return(
      <div className="locations__location">
         <div id={`mapid${id}`} className="mapid"></div>
         <div className="locations__locationContainer">
            <h2>{country}</h2>
            <div className="locations__locationWrapper">
               <div className="locations__location__adress">
                  <p>{name}</p>
                  <p>{adress}</p>
                  <p>{city}</p>
               </div>

               <div className="locations__location__contact">
                  <p>Contact</p>
                  <p>P : {tel}</p>
                  <p>M : {mail}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AllLocations