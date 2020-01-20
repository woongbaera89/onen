import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'


const menu = [
  {name:"brand", path:"/brand"},
  {name:"menu", path:"/menu"},
  {name:"store", path:"/store"},
  {name:"franchise", path:"/franchise"},
  {name:"notice", path:"/notice"}
];



function navigation({Component, pageProps, pathname}) {
  const [animate, setanimate] = useState("slide-down");
  const [beforeMenu, setbeforeMenu] = useState(menu);
  const [afterMenu, setafterMenu] = useState([]);
  
  useEffect(() => {

    const handleRouteChangeStart = url => {
      setanimate("slide-up");
    }
    const handleRouteChangeComplete = url => {
      setanimate("slide-down")
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    }
  }, []);

  useEffect(() => {
    const before = []
    const after = []
    let sliceIdx = 999;
    menu.map((each, idx) => {
      if(each.path == pathname){
        sliceIdx = idx;
      }
    });
    menu.map((each, idx) => {
      if(idx<=sliceIdx) before.push(each);
      else after.push(each);
    });
    console.log(before, after, sliceIdx)
    setbeforeMenu(before)
    setafterMenu(after)
  }, [pathname]);


  return ( 
    <div>
      <nav>
        <ul>
          {beforeMenu.map((each) => (
            <li key={each.name}>
              <Link href={each.path == pathname ? "/" : each.path}><a className="nav-link">{each.name}</a></Link>
              {each.name == "brand" && (
                <Link href="/">
                  <a className="logo">
                    <img src="../static/logo.png"/>
                  </a>
                </Link>
              )}
            </li>
          ))}
          <div key={"comp"} className={`page-transition ${animate}`}>
            <Component {...pageProps} />
          </div>
          {afterMenu.map((each) => (
            <li key={each.name}><Link href={each.path == pathname ? "/" : each.path}><a className="nav-link">{each.name}</a></Link></li>
          ))}
        </ul>
      </nav> 
      <style jsx>{`
        .page-transition {
          transition:all 0.4s;
          border-top:3px solid #000;
          margin-bottom:-3px;
        }
        .slide-up {
          height:0;
          overflow:hidden;
        }
        .slide-down {
          overflow:hidden;
        }
        nav {
          background:#fff; 
        }
        .logo {
          position:absolute;
          right:36px;
          top:50%;
          margin-top:-56px;
          width:112px;
          height:112px;
          z-index:9;
        }
        ul, li {
          list-style:none;
          margin:0;
          padding:0;
        }
        ul {
          transition: all 0.3s;
          border-bottom:3px solid #000;
        }
        li {
          height:164px;
          border-top:3px solid #000;
          overflow:hidden;
          position:relative;
        }
        .nav-link {
          padding:0 32px;
          font-size:164px;
          line-height:180px;
          font-weight:bold;
          color:black;
          text-decoration:none;
          display:block;
        }
        @media only screen and (max-width: 960px)  {

          .page-transition {
            border-top:1.5px solid #000;
            margin-bottom:-1.5px;
          }
          nav {
            height:100vh;
            padding-bottom:70px;
          }
          .logo {
            width:56px;
            height:56px;
            right:24px;
            margin-top:-28px;
            width:9vh;
            height:9vh;
            right:7vw;
            margin-top:-4.5vh;
          }
          ul {
            border-bottom:1.5px solid #000;
            height:100%;
          }
          li {
            height:20%;
            border-top:1.5px solid #000;
            overflow:hidden;
          }
          .nav-link {
            padding:0 16px;
            font-size:68px;
            font-size:12vh;
            line-height:100px;
            line-height:22vh;
          }

        }
        @media only screen and (max-width: 480px)  {
          .nav-link {
            font-size:21.7vw;
          }
        }
      `}</style>
    </div>
  )
}

export default navigation