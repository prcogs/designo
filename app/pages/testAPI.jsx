// import Head from 'next/head'
// import Link from 'next/link';
// import { useEffect, useState } from 'react';


// import { getAllPosts, getAllSlug, getPost, postComment, getComments }  from '../lib/api.jsx'

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [data, setData] =  useState({})
//   const [slug, setSlug] = useState({})
//   const [post, setPost] = useState({})
//   const [comment, setComment] = useState({})
//   const [comments, setComments] = useState({})


//   useEffect(() => {
//     async function fetchData() {
//       const resp = await getAllPosts()
//       setData(resp)
//       setIsLoading(false)
//     }
//     fetchData()
//   }, [])

//   useEffect(() => {
//     async function fetchSlug() {
//       const resp = await getAllSlug()
//       setSlug(resp)
//     }
//     fetchSlug()
//   }, [])

//   useEffect(() => {
//     async function fetchPost() {
//       const resp = await getPost("test-2")
//       setPost(resp)
//       // console.log(resp)
//     }

//     fetchPost()
//   }, [])

//   async function postAcomment() {
//     const resp = await postComment("bitch", "content-3", 1)
//     setComment(resp)
//     console.log(resp)
//   }

//   useEffect(() => {
//     const getCommentsPost = async() => {
//       const resp = await getComments(1)
//       setComments(resp)
//       console.log(resp)
//     }

//     getCommentsPost()
//   },[])

//   return (
//     <div className="">
//       <Head>
//         <title>Designo</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="main">
//         <h1 className="title">Welcome to our demo blog!</h1>

//         <p>
//           You can find more articles on the{' '}
//           <Link href='/blog'>
//             <a>blog articles page</a>
//           </Link>
//         </p>

//         {!isLoading ? data?.edges.map((item, i) => {
//           return <><p key={i}>{JSON.stringify(item)}</p><br/></>
//         }) : "Loading"}

//         <p style={{"color":"red"}}>{JSON.stringify(post)}</p><br/>
        

      
        

//         {JSON.stringify(slug)}


//         <button onClick={() => postAcomment()}>Test d'envoye d'un commentaire</button>
//         {JSON.stringify(comment)}

//         {JSON.stringify(comments)}
//       </main>

//       <footer>
//         <a
//           href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Powered by{' '}
//           <img src='/vercel.svg' alt='Vercel Logo' className="" />
//         </a>
//       </footer>
//     </div>
//   )
// }
