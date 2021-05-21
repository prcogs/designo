import Link from "next/link"


const CardsProject = ({ projects, posts }) => {
   if(posts !== undefined) {
      return(
         <div className="cardsProject">
            {posts.edges.map((post, key) => {
               return (
                  <Link href={`/blog/${post?.node.slug}`} key={key}>
                     <a><CardProject project={post.node} blog="blog"/></a>
                  </Link>
               )
            })}
   
         </div>
      )
   } else {
      return(
         <div className="cardsProject">
            {projects.map((project, key) => {
               return <CardProject project={project} key={key}/>
            })}
   
         </div>
      )
   }

   
}

// récupère l'image
export const CardProject = ({ project, blog }) => {
   
   if(!blog) var className = " cardProject--project"
   else var className = ""
   return(
      <div className={"cardProject" + className}>
         <img src={project?.extraPostInfo?.image?.sourceUrl !== undefined ? project?.extraPostInfo.image.sourceUrl : project.image + ".jpg"} alt="Image of project / article"/>
         <div className="cardProject__text">
            <h3>{project?.title}</h3>
            <p>{project?.description || project.extraPostInfo.auteurExtrait}</p>
         </div>
      </div>
   )
}


export default CardsProject