import Link from 'next/link'


const BannerTop = () => {

   return (
      <div className="home__bannerTop">
         <div className="home__bannerTopContainer">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, 
               app design, and engaging brand experiences. Find out more about our services.</p>
            <Link href="/about"> 
               <a className="btn btn--dark">LEARN MORE</a>
            </Link>
         </div>
         <img src="/assets/home/desktop/image-hero-phone.png" alt="Image hero phone"/>
      </div>
   )
}

export default BannerTop