import Link from "next/link"


export const CardDesign = ({ children, name, page }) => {
   if(page !== undefined) { 
      var className = "cardsDesign__card cardsDesign--" + name + " cardsDesign--" + name + "--onpage"
   } else {
      var className = "cardsDesign__card cardsDesign--" + name
   }

   return(
      <Link href={`/${name}`}>
         <a className={className}>
            {children}
            <p>VIEW PROJECTS <img src="/assets/shared/desktop/icon-right-arrow.svg"/></p>
         </a>
      </Link>
   )
}

const CardsDesign = ({ page }) => {

   if(page === "web_design") {
      return(
         <div className="cardsDesign cardsDesign--onpage" >
             <CardDesign name="app-design" page={page}>
               <h3>APP DESIGN</h3>
             </CardDesign>
   
             <CardDesign name="graphic-design" page={page}>
               <h3>GRAPHIC DESIGN</h3>
             </CardDesign>
         </div>
      )
   } else if(page === "app_design") {
      return(
         <div className="cardsDesign cardsDesign--onpage">
            <CardDesign name="web-design" page={page}>
               <h3>WEB DESIGN</h3>
             </CardDesign>
   
             <CardDesign name="graphic-design" page={page}>
               <h3>GRAPHIC DESIGN</h3>
             </CardDesign>
         </div>
      )
   } else if(page === "graphic_design") {
      return(
         <div className="cardsDesign cardsDesign--onpage">
            <CardDesign name="web-design" page={page}>
               <h3>WEB DESIGN</h3>
             </CardDesign>
   
             <CardDesign name="app-design" page={page}>
               <h3>APP DESIGN</h3>
             </CardDesign>
         </div>
      )
   } else {
      return(
         <div className="cardsDesign">
            <CardDesign name="web-design" page={page}>
               <h3>WEB DESIGN</h3>
             </CardDesign>
   
             <CardDesign name="app-design" page={page}>
               <h3>APP DESIGN</h3>
             </CardDesign>
   
             <CardDesign name="graphic-design" page={page}>
               <h3>GRAPHIC DESIGN</h3>
             </CardDesign>
         </div>
      )
   }
}

export default CardsDesign