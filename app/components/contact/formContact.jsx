import BannerTopDesign from "../layout/bannerTopDesign"


const FormContact= () => {

   return(
      <BannerTopDesign detailClassName="formContact">
         <div className="formContact__description">
            <h2>Contact Us</h2>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
                  If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
         </div>

         <form className="formContact__form">
            <input type="text" placeholder="Name"/>

            <input type="text" placeholder="Email adress"/>

            <input type="" placeholder="Phone"/>

            <textarea placeholder="Your message"/>

            <button className="btn--dark">SUBMIT</button>
         </form>
      </BannerTopDesign>
      
   )
}

export default FormContact