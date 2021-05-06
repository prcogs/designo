import { useEffect, useState } from "react"
import ReactHtmlParser from 'react-html-parser';

import { formatDate } from "../../lib/formatDate";
import PaginationRounded from "../layout/paginations";


const Comments = ({  comments, reqComments, isLoading }) => {
   const [currentPage, setcurrentPage] = useState(1)
   const [postsPerPage, setPostPerPages] = useState(5)

   const handleChange = (event, value) => {
      setcurrentPage(value);
    };
   
   useEffect(() => {
      reqComments()
   },[])

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
            <p>{comments.commentCount !== null ? comments.commentCount : 0} commentaire{comments.commentCount > 1 && "s"}</p>
            <PaginationRounded handleChange={handleChange} numberMaxPages={numberMaxPages}/>
            {comments.commentCount !== null ? 
               currentPosts.map((comment, i) => {
                  return (
                     <div className="comments__comment" key={i}>
                        <h3>{comment?.author.node.name}</h3>
                        <p>le {formatDate(comment.date)[0]}{} à {formatDate(comment.date)[1]}</p>
                        {ReactHtmlParser(comment.content)}
                     </div>
                  )
               }) : 

               <p>No commentaire</p>
            }
               

         </div>
      )
   }
}

   

export default Comments