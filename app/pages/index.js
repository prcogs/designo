import Head from 'next/head'
import { useCallback, useEffect, useMemo } from 'react';

import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import BannerTop from '../components/home/bannerTop';
import getNameSizeOfScreen from '../lib/getSizeScreen';
import CardsDesign from '../components/layout/cardsDesign';
import FeatureCompagny from '../components/home/featureCompagny';

export default function Home() {
  const nameSize = getNameSizeOfScreen()
  

  return (
    <>
      <Head>
          <title>Home - Designo</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>

          {/* Font Jost Regular 400* & Medium 500 */}
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
      </Head>


      <Header position="top" nameSize={nameSize}/>

      <div className="home">
        <BannerTop/>

        <CardsDesign/>

        <FeatureCompagny/>
      </div>

      <Footer/>
    </>
  )
}


