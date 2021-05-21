
const DescriptionCompagny = ({ children, detailClassName }) => {
   
   return(
      <div className={"descriptionCompagny " + "descriptionCompagny--" + detailClassName}>
         {children}
      </div>
   )
}

export default DescriptionCompagny