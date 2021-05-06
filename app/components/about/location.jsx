import Link from "next/link"


const Location = ({ country}) => {
   return(
      <div className="about__location">
         <img src={`/assets/shared/desktop/illustration-${country}.svg`}/>
         <h3>{country}</h3>
         <Link href="/">
            <a>SEE LOCATIONS</a>
         </Link>
      </div>
   )
}

export default Location