import Head from 'next/head'
import Image from 'next/image'
import { Header, Nav, Results } from '../components'
import requests from '../utils/requests';

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          {/* Header */}
          <Header/>
          {/* Navbar */}
          <Nav/>
          {/* Results */}
          <Results results={props.results}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genra;
  console.log(requests[genre]?.url)
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res)=>res.json());

  return{
    props:{
      results:request.results,
    },
  };
}