

const CardsProject = ({ projects }) => {
   return(
      <div className="cardsProject">
         {projects.map((project, i) => {
            return <CardProject project={project} key={i}/>
         })}

      </div>
   )
}

// récupère l'image
export const CardProject = ({ project }) => {
   return(
      <div className="cardProject">
         <img src={`${project?.image}.jpg`}/>
         <div className="cardProject__text">
            <h3>{project?.title}</h3>
            <p>{project?.description}</p>
         </div>
      </div>
   )
}


export default CardsProject