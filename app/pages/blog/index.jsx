import Head from "next/head"
import BannerTopDesign from "../../components/layout/bannerTopDesign"

import CardsProject from "../../components/layout/cardsProject"
import Footer from "../../components/layout/footer"
import Header from "../../components/layout/header"
import { getAllPosts } from "../../lib/api"
import { dataBlog } from "../../lib/data/dataBlog"
import getNameSizeOfScreen from "../../lib/getSizeScreen"


const Blog = ({ posts }) => {
   const nameSize = getNameSizeOfScreen()

   return (
      <>
         <Head>
            <title>Blog - Designo</title>

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  

            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
                  rel="stylesheet" 
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
                  crossorigin="anonymous">
            </link>
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="blog">
            <BannerTopDesign>
               <h1>Blog</h1>
               <p>Here we talk about everything and nothing, maybe there is something that will interest you.</p>
            </BannerTopDesign>

            <CardsProject projects={dataBlog} posts={posts}/>
         </div>

         <Footer/>
      </>
   )
}

export async function getStaticProps() {
   const posts = await getAllPosts()

   return {
     props: {
       posts
     },
   }
 }

export default Blog