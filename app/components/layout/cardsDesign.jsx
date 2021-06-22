import Link from "next/link"


export const CardDesign = ({ children, name, page }) => {
   let className = `cardsDesign__card cardsDesign--${name}`
   if(page) { 
      className = `cardsDesign__card cardsDesign--${name} cardsDesign--${name}--onpage`
   }

   return(
      <Link href={`/${name}`}>
         <a className={className}>
            {children}
            <p>VIEW PROJECTS <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="Icon rigth arrow"/></p>
         </a>
      </Link>
   )
}

const CardsDesign = ({ page }) => {
   let className = `cardsDesign`
   let cards = ["app-design", "graphic-design", "web-design"]
   if(page) { 
      className = `cardsDesign cardsDesign--onpage`
      cards.splice(cards.indexOf(page), 1)
   }

   return(
      <div className={className} >
          {cards.map((card, i) => {
               return (
                  <CardDesign name={card} page={page} key={i}>
                     <h3>{card.toUpperCase().replace("-", " ")}</h3>
                  </CardDesign>
               )
            })
         }
      </div>
   )
}

export default CardsDesign