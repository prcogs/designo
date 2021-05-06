import Head from "next/head"
import DescriptionCompagny from "../components/about/descriptionCompagny";
import Location from "../components/about/location";
import BannerTopDesign from "../components/layout/bannerTopDesign";

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import getNameSizeOfScreen from '../lib/getSizeScreen';


const About = () => {
   const nameSize = getNameSizeOfScreen()

   return(
      <>
         <Head>
            <title>About - Designo</title>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" /> */}

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>
 
         <div className="about">
            
            <BannerTopDesign detailClassName="bannerTopDesign--about">
               <img src="/assets/about/desktop/image-about-hero.jpg"/>
               <div className="bannerTopDesign--aboutContainer">
                  <h1>About Us</h1>
                  <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                     We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact.
                     We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
               </div>
            </BannerTopDesign>

            <DescriptionCompagny>
               <img src="/assets/about/desktop/image-world-class-talent.jpg"/>
               <div className="descriptionCompagnyContainer">
                  <h2>World-class talent</h2>
                  <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. 
                     We are constantly updating our skills in a myriad of platforms.</p>
                  <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. 
                     We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
               </div>
            </DescriptionCompagny>

            <div className="about__linksLocation">
               <Location country="canada"/>
               <Location country="australia"/>
               <Location country="united-kingdom"/>
            </div>

            <DescriptionCompagny detailClassName="deal">
               <img src="/assets/about/desktop/image-real-deal.jpg"/>
               <div className="descriptionCompagnyContainer">
                  <h2>The real deal</h2>
                  <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. 
                     We make design and technology more accessible and give you tools to measure success.</p>
                  <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
               </div>
            </DescriptionCompagny>

         </div>
         <Footer/>
      </>
   )
}

export default About