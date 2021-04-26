import Head from 'next/head'
import Header from '../components/layout/header'

export default function Home() {
  

  return (
    <div className="home">
      <Head>
        <title>Home - Designo</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32" />

        {/* Font Jost Regular 400* & Medium 500 */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"/>  
      </Head>

      <Header/>
    </div>
  )
}


