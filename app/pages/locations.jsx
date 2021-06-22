import Head from "next/head"

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import AllLocations from "../components/locations/locations";
import dataLocations from "../lib/data/dataLocations";
import getNameSizeOfScreen from '../lib/getSizeScreen';


const Locations = () => {
   const nameSize = getNameSizeOfScreen()
   
   return(
      <>
         <Head>
            <title>Locations - Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}
            
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                  crossorigin=""></script>

            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                     integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                     crossorigin=""/>
            

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>
   
         <div className="locations">
            <AllLocations dataLocations={dataLocations}/>
         </div>

         <Footer/>
      </>
   )
}

export default Locations