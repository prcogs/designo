import { useEffect, useState } from "react"
import ReactHtmlParser from 'react-html-parser';

import { formatDate } from "../../lib/formatDate";
import PaginationRounded from "../layout/paginations";


const Comments = ({  comments, reqComments, isLoading }) => {
   const [currentPage, setcurrentPage] = useState(1)
   const [postsPerPage, setPostPerPages] = useState(5)
   const [className, setClassName] = useState("")

   const handleChange = (event, value) => {
      setcurrentPage(value);
    };
   
   useEffect(() => {
      reqComments()
   },[])

   useEffect(() => {
      if(currentPage === 1) {
         setClassName(" fade-down")

         const timer = setTimeout(() => {
            setClassName("")
         }, 1000)
   
         return () => clearTimeout(timer)
      } 

   },[reqComments])

   if(isLoading) {
      return (
         <div className="comments">
            Loading data
         </div>
      )

   } else {

      const indexOfLastPost = currentPage * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = comments?.comments.nodes.slice(indexOfFirstPost, indexOfLastPost)
      const numberMaxPages = Math.ceil(comments?.comments.nodes.length / postsPerPage)

      return(
         <div className="comments">
            <p>{comments.commentCount !== null ? comments.commentCount : 0} comment{comments.commentCount > 1 && "s"}</p>

            <PaginationRounded handleChange={handleChange} numberMaxPages={numberMaxPages}/>

            {comments.commentCount !== null ? 
               currentPosts.map((comment, key) => {
                  
                  if(key === 0) {
                     if(className !== "") {
                        var animClass = className + "_firstElement"
                     } else {
                        var animClass = className
                     }
                  } else {
                     var animClass = className
                  }

                  return (
                     <div className={"comments__comment" + animClass} key={key}>
                        <p>{comment?.author.node.name}</p>
                        <p>le {formatDate(comment.date)[0]} à {formatDate(comment.date)[1]}</p>
                        {ReactHtmlParser(comment.content)}
                     </div>
                  )
               }) : 

               <p>No comments</p>
            }
         </div>
      )
   }
}

   

export default Comments