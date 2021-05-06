

const AllLocations = ({ dataLocations }) => {
   return(
      <div className="locations__allLocations">
         {dataLocations.map((location, i) => {
            return <Location location={location} key={i}/>
         })}
      </div>
   )
}

export const Location = ({ location }) => {

   return(
      <div className="locations__location">
         <img src="/assets/locations/desktop/image-map-australia.png"/>
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