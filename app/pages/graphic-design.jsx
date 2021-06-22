import Head from "next/head"
import BannerTopDesign from "../components/layout/bannerTopDesign";
import CardsDesign from "../components/layout/cardsDesign";
import CardsProject from "../components/layout/cardsProject";

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import { dataProjectGraphic }from "../lib/dataProject";
import getNameSizeOfScreen from '../lib/getSizeScreen';


const Graphic_design = () => {
   const nameSize = getNameSizeOfScreen()

   return(
      <div className="backgroundPage backgroundPage--pageDesign">
         <Head>
            <title>Graphic design -  Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="web_design">
            <BannerTopDesign>
               <h1>Graphic Design</h1>
               <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
            </BannerTopDesign>

            <CardsProject projects={dataProjectGraphic}/>
            
            <CardsDesign page="graphic-design"/>

         </div>

         <Footer/>
      </div>
   )
}

export default Graphic_design