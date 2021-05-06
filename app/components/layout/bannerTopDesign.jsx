

const BannerTopDesign = ({ children, detailClassName }) => {
   if(detailClassName !== undefined) {
      var className = " " + detailClassName
   } else {
      var className = ""
   }

   return(
      <div className={"bannerTopDesign" + className}>
         {children}
      </div>
   )
}


export default BannerTopDesign