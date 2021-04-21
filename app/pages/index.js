import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Designo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main classNam="main">
        <h1 className="title">Welcome to our demo blog!</h1>

        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
            <a>blog articles page</a>
          </Link>
        </p>

      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className="" />
        </a>
      </footer>
    </div>
  )
}
