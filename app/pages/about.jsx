import Head from "next/head"

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import getNameSizeOfScreen from '../lib/getSizeScreen';


const About = () => {
   const nameSize = getNameSizeOfScreen()

   return(
      <>
         <Header position="top" nameSize={nameSize}/>

         <div className="web_design">
            <Head>
               <title>About - Designo</title>
               {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

               {/* Font Jost Regular 400* & Medium 500 */}
               <link rel="preconnect" href="https://fonts.gstatic.com"/>
               <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
            </Head>
            
            

         </div>
         <Footer/>
      </>
   )
}

export default About