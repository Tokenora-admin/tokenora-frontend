import Head from "next/head";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tokenora</title>
        <meta name="description" content="a community for crypto users"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins"
            rel="stylesheet"
          />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
