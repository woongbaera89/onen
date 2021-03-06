import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Chapstick from '../comps/chapstick'
import Social from '../comps/social'


const menu = [
  {name:"mt1", path:"/brand", subname:"브랜드 소개"},
  {name:"mt2", path:"/menu", subname:"메뉴 소개"},
  {name:"mt3", path:"/store", subname:"스토어 안내"},
  {name:"mt4", path:"/franchise", subname:"창업문의"},
  {name:"mt5", path:"/notice", subname:"원앤 소식"}
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
          <Link href="/">
            <a className="logo">
              <img src="../static/logo.png"/>
            </a>
          </Link>
          {beforeMenu.map((each) => (
            <li key={each.name}>
              <Link href={each.path == pathname ? "/" : each.path}>
                <a className="nav-link">
                  <img className="mm" src={`../static/${each.name}_m.png`}/>
                  <img className="dd" src={`../static/${each.name}.png`}/>
                  <span className="dd">{each.subname}</span>
                </a>
              </Link>
              <Chapstick/>
              {each.name === 'mt5' && <Social/>}
            </li>
          ))}
          <div key={"comp"} className={`page-transition ${animate}`}>
            <Component {...pageProps} />
          </div>
          {afterMenu.map((each) => (
            <li key={each.name}>
              <Link href={each.path == pathname ? "/" : each.path}>
                <a className="nav-link">
                  <img src={`../static/${each.name}.png`}/>
                  <span>{each.subname}</span>
                </a>
              </Link>
              <Chapstick/>
              {each.name === 'mt5' && <Social/>}
            </li>
          ))}
        </ul>
      </nav> 
      <footer>
        <div>주식회사 팩토리엔  FACTORY N</div>
        <div>서울특별시 용산구 회나무로 43길 36 ｜ 대표자 : 김훈태 ｜ 사업자번호 : 252-86-00721 <br className="mm"/>
        T : 070-8897-4947 ｜ F:  02-790-1732 ｜ E : one_n_official@factoryncompany.com<span className="dd"> | </span><br className="mm"/>
        Copyright (C)FACTORY N ALL RIGHTS RESERVED.
        </div>
        
      </footer>
      <style jsx>{`
        footer {
          font-size:14px;
          margin-top:76px;
          letter-spacing:-0.5px;
        }
        footer div:first-child {
          margin-bottom:6px;
          font-size:1.1em;
          font-weight:bold;
        }
        .page-transition {
          transition:all 0.4s;
          border-top:3px solid #000;
          margin-bottom:-3px;
          position:relative;
        }
        .slide-up {
          height:0;
          overflow:hidden;
        }
        .slide-down {
          overflow:hidden;
        }
        .logo {
          position:absolute;
          right:36px;
          top:27px;
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
          background:#fff; 
          transition: all 0.3s;
          border-bottom:3px solid #000;
          position:relative;
        }
        li {
          height:163px;
          border-top:3px solid #000;
          position:relative;
        }
        .nav-link {
          padding:0;
          font-weight:bold;
          color:black;
          text-decoration:none;
          display:block;
        }
        .nav-link img{
          height:160px;
        }
        .nav-link span{
          opacity:0;
          display:inline-block;
          font-size:24px;
          letter-spacing:-1px;
          position:relative;
          top:-14px;
          transition:opacity 0.3s;
        }
        .nav-link:hover span{
          opacity:1;
        }
        @media only screen and (max-width: 960px)  {

          .page-transition {
            border-top:2px solid #000;
            margin-bottom:-2px;
          }
          footer {
            padding:20px 20px 90px 20px;
            font-size:8px;
            margin-top:0;
          }
          nav {
            min-height:92vh;
            overflow:hidden;
          }
          .logo {
            width:50px;
            height:50px;
            right:20px;
            top:26px;
          }
          ul {
            border-bottom:2px solid #000;
          }
          li {
            height:100px;
            border-top:2px solid #000;
          }
          .nav-link {
            padding:0 16px;
          }
          .nav-link {
            padding:0 5px 10px;
          }
          .nav-link img {
            height:72px;
            width:auto;
            vertical-align:top;
            margin-top:16px;

          }
          .nav-link span{
            display:none;
          }

        }
      `}</style>
    </div>
  )
}

export default navigation