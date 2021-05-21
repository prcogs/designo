import Head from "next/head"
import BannerTopDesign from "../components/layout/bannerTopDesign";
import CardsDesign from "../components/layout/cardsDesign";
import CardsProject from "../components/layout/cardsProject";

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import { dataProjectApp } from "../lib/dataProject";
import getNameSizeOfScreen from '../lib/getSizeScreen';


const App_design = () => {
   const nameSize = getNameSizeOfScreen()

   return(
      <div className="backgroundPage backgroundPage--pageDesign">
         <Head>
            <title>App design - Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="web_design">
            <BannerTopDesign>
               <h1>App Design</h1>
               <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
            </BannerTopDesign>

            <CardsProject projects={dataProjectApp}/>
            
            <CardsDesign page="app_design"/>

         </div>

         <Footer/>
      </div>
   )
}

export default App_design