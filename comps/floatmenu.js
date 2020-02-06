import React, { useState, useEffect, useRef } from 'react'

function floatmenu({menu, handleClick}) {
  const [selected, setselected] = useState(0);
  const [fixed, setfixed] = useState(false);
  const [right, setright] = useState(36);
  const menuRef = useRef();
  
  const elementInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  const menuClick = (idx) => {
    //setselected(idx);
    if(handleClick) {
      handleClick(idx);
    }
  }

  const listener = () => {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0)
    setright(36+Math.max((document.body.offsetWidth-1364)/2, 0))

    const els = document.getElementsByTagName("section");
    if(els && els.length > 0){
      for(let i = 0; i < els.length; i++){
        const el = els[i];
        if(elementInViewport(el)){
          setselected(i);
          break;
        }
      }
    }
  };

  const resize = e => {
    setright(36+Math.max((document.body.offsetWidth-1364)/2, 0))
  };

  useEffect(() => {
    setright(36+Math.max((document.body.offsetWidth-1364)/2, 0))
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", listener);
    listener();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return ( 
    <div>
      <div className="move-top" onClick={() => {
        const el = document.getElementById("app");
        if(el) {
          el.scrollIntoView({behavior: "smooth"});
        }
      }}>
        {menu[0] === "korean" ? (
          <img src="../static/ic_top_w.png"/>
        ) : (
          <img src="../static/ic_top_b.png"/>
        )}
      </div>
      <div ref={menuRef} className={'box '+fixed}>
        <ul>
          {menu.map((each,idx) => (
            <li key={"m"+idx} className={selected == idx} onClick={menuClick.bind(null, idx)}>
              {each}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .move-top {
          position:fixed;
          right:${right-36}px;
          bottom:240px;
          z-index:99;
          width:70px;
        }
        .box{
          position: relative;
          margin-top:-3px;
        }
        .box.true ul {
          position:fixed;
          top:0;
          right:${right}px;
          z-index: 3;
        }
        ul, li {
          list-style:none;
          margin:0;
          padding:0;
        }
        ul {
          position:absolute;
          right:36px;
        }
        li {
          cursor:pointer;
          font-size:23px;
          font-weight:bold;
          height:44px;
          line-height:40px;
          padding:0 18px;
          min-width:80px;
          border:3px solid #000;
          background:#fff;
          display:inline-block;
          text-align:center;
          margin-left:-3px;
        }
        li.true {
          background:#FF7575;
        }
        li:active {
          background:#FF7575;
        }
        @media only screen and (max-width: 960px)  {
          .move-top {
            position:fixed;
            right:0px;
            bottom:120px;
            z-index:99;
            width:32px;
          }
          .box{
            position: relative;
            margin-top:-3px;
          }
          .box.true ul {
            position:fixed;
            top:0px;
            right:20px;
            z-index: 1;
          }
          ul {
            right:20px;
          }
          li {
            font-size:11px;
            height:22px;
            line-height:20px;
            padding: 0 9px;
            border:2px solid #000;
            min-width:38px;
          }

        }
      `}</style>
    </div>
  )
}

export default floatmenu