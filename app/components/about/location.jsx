import Link from "next/link"


const Location = ({ country }) => {
  

   return(
      <div className="about__location">
         <img src={`/assets/shared/desktop/illustration-${country}.svg`} alt={"Illustration " + country}/>
         <h3>{country}</h3>
         <Link href="/locations">
            <a>SEE LOCATIONS</a>
         </Link>
      </div>
   )
}

export default Location