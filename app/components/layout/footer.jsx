import Header from "./header"


const Footer = () => {

   return(
      <footer>
          <div className="footer__about">
             <div className="footer__aboutContainer">
               <h2>Let’s talk about your project</h2>
               <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
             </div>
             <button className="btn btn--dark">Get In touch</button>
             {/* <img src={`assets/shared/desktop/bg-pattern-call-to-action.svg`}/> */}
          </div>

          

          <div className="footer__infoOfCompagny">
             <div className="footer__infoOfCompagnyContainer">

            <Header position="bottom"/>

             <div className="footer__infoOfCompagny--containerOne">
                <p>Designo Central Office</p>
                <p>3886 Wellington Street</p> 
                <p>Toronto, Ontario M9C 3J5</p>
             </div>

             <div className="footer__infoOfCompagny--containerTwo">
                <p>Contact Us (Central Office)</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
             </div>

             <div className="footer__infoOfCompagny--socialNetworks">
               <i><img src="/assets/shared/desktop/icon-facebook.svg"/></i>
               <i><img src="/assets/shared/desktop/icon-youtube.svg"/></i>
               <i><img src="/assets/shared/desktop/icon-twitter.svg"/></i>
               <i><img src="/assets/shared/desktop/icon-pinterest.svg"/></i>
               <i><img src="/assets/shared/desktop/icon-instagram.svg"/></i>
             </div>
             </div>
          </div>
      </footer>
   )
}

export default Footer