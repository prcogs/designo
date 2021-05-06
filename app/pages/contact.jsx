import Head from "next/head"
import Location from "../components/about/location";
import FormContact from "../components/contact/formContact";

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import getNameSizeOfScreen from '../lib/getSizeScreen';


const Contact = () => {
   const nameSize = getNameSizeOfScreen()

   return(
      <>
         <Head>
            <title>Contact - Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="contact">
            <FormContact/>

            <div className="about__linksLocation">
               <Location country="canada"/>
               <Location country="australia"/>
               <Location country="united-kingdom"/>
            </div>
         </div>

         <Footer/>
      </>
   )
}

export default Contact