import Head from "next/head"
import BannerTopDesign from "../components/layout/bannerTopDesign";
import CardsProject from "../components/layout/cardsProject";
import CardsDesign from "../components/layout/cardsDesign";

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import { dataProjectWeb } from "../lib/dataProject";
import getNameSizeOfScreen from '../lib/getSizeScreen';


const Web_design = () => {
   const nameSize = getNameSizeOfScreen()


   return(
      <>
         <Head>
            <title>Web design - Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="web_design">
            <BannerTopDesign>
               <h1>Web Design</h1>
               <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </BannerTopDesign>
            
            <CardsProject projects={dataProjectWeb}/>

            <CardsDesign page="web_design"/>
            

         </div>

         <Footer/>
      </>
   )
}

export default Web_design