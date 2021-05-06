import { useCallback, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'


const Header = ({ position, nameSize }) => {
   const [showMenu, setShowMenu] = useState(false)

   const changeMenu = useCallback(() => {
      setShowMenu(!showMenu)
   })

   const router = useRouter()
   const path = router.pathname.split('/')[1]

   const activeLi = (li) => {
      if(path === li) return "active"
   }


   return(
      <div className={"header header--" + position}>
         <div className={"header--" + position + "__containerLogo"}>
            <Link href="/"><a><img className="imgLogo" src={`/assets/shared/desktop/logo-${position === "top" ? "dark" :"light"}.png`}/></a></Link>

            {(nameSize === "mobile" && !showMenu) && <img className="imgHamburger" onClick={() => changeMenu()} src="/assets/shared/mobile/icon-hamburger.svg"/> }
            {(nameSize === "mobile" && showMenu) && <img className="imgClose" onClick={() => changeMenu()} src="/assets/shared/mobile/icon-close.svg"/> }
         </div>


         {(nameSize !== "mobile" || (nameSize === "mobile" && showMenu)) && <ul className={"header__list header__list--"+ position}>
                                                                              <li className={activeLi("about")}><Link href="/about"><a>Our compagny</a></Link></li>
                                                                              <li className={activeLi("locations")}><Link href="/locations"><a>Locations</a></Link></li>
                                                                              <li className={activeLi("blog")}><Link href="/blog"><a>Blog</a></Link></li>
                                                                              <li className={activeLi("contact")}><Link href="/contact"><a>Contact</a></Link></li>
                                                                           </ul>
         }
         

      </div>
   )
}

export default Header