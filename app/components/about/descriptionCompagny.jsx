
const DescriptionCompagny = ({ children, detailClassName }) => {
   // `descriptionCompagny descriptionCompagny--${detailClassName}`
   return <div className={`descriptionCompagny descriptionCompagny--${detailClassName}`}> {children} </div>
}

export default DescriptionCompagny