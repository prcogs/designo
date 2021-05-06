import Head from "next/head"
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';

import Comments from "../../components/blog/comments"
import FormComments from "../../components/blog/formComments";
import BannerTopDesign from "../../components/layout/bannerTopDesign"
import Footer from "../../components/layout/footer"
import Header from "../../components/layout/header"
import { getAllSlug, getComments, getPost } from "../../lib/api"
import { formatDate } from "../../lib/formatDate";
import getNameSizeOfScreen from "../../lib/getSizeScreen"


const Article = ({ post }) => {
   const nameSize = getNameSizeOfScreen()

   const [isLoading, setIsLoading] = useState(true)
   const [comments, setComments] = useState([])
   
   const reqComments = async () => {
      setComments(await getComments(post.id))
      setIsLoading(false)
   }

   return (
      <>
         <Head>
            <title>{post?.title} - Designo</title>

            {/* Font Jost Regular 400* & Medium 500 */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
         </Head>

         <Header position="top" nameSize={nameSize}/>

         <div className="blog">
            <BannerTopDesign>
               <h1>{post?.title}</h1>
               <p>{post?.description}</p>
               <p>Posté le {formatDate(post?.date, "T")[0]}</p>
            </BannerTopDesign>

            <div className="contentBlog">
               {ReactHtmlParser(post?.content)}
            </div>

            <FormComments postId={post.databaseId} reqComments={reqComments}/>

            <Comments comments={comments} reqComments={reqComments} isLoading={isLoading}/>
         </div>

         <Footer/>
      </>
   )
}


export async function getStaticPaths() {
   const slugs = await getAllSlug()

   return {
      paths: slugs.edges.map(slug => ({
         params : {slug : slug.node.slug}
      })),
      fallback:false,
   } 
}

export async function getStaticProps( { params }) {
   const post = await getPost(params.slug)

   return {
     props: {
       post
     },
   }
}

 

export default Article