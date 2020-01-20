import Navigation from '../comps/navigation'
import Banner from '../comps/banner'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="app">
      <Head>
        <title>1/n</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navigation top={true} pathname={router.pathname} Component={Component} pageProps={pageProps} />
      <Banner/>
      <style global jsx>{`
        * {
          font-family: 'Roboto', sans-serif;
          box-sizing:border-box;
        }  
        input {
          outline: none;

        }
        html, body {
          margin:0;
          padding:0;
          background:#D1D1D1;
        }
        .app {
          width:100%;
          max-width:1364px;
          margin: 0 auto;
        }
        img {
          max-width:100%;
        }
        a {
          text-decoration:none;
          color:inherit;
        }
        @media only screen and (min-width: 1364px)  {
          .app {
            margin:124px auto;
          }
        }
        @media only screen and (max-width: 960px)  {

          html, body {
            background:#fff;
          }
          .app {
            zoom:1;
          }

        }
      `}</style>
    </div>
  )
}
export default MyApp