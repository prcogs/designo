

const BannerTopDesign = ({ children, detailClassName }) => {
   let className = ""
   if(detailClassName !== undefined) {
      className = detailClassName
   }

   return(
      <div className={`bannerTopDesign ${className}`}> {children} </div>
   )
}


export default BannerTopDesign