import React, { useState, useEffect, useRef } from 'react'

function floatmenu({menu, handleClick}) {
  const [selected, setselected] = useState(0);
  const [fixed, setfixed] = useState(false);
  const [right, setright] = useState(36);
  const menuRef = useRef();
  

  const listener = e => {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0)
    setright(36+Math.max((document.body.offsetWidth-1364)/2, 0))
  };
  useEffect(() => {

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return ( 
    <div>
      <div ref={menuRef} className={'box '+fixed}>
        <ul>
          {menu.map((each,idx) => (
            <li key={"m"+idx} className={selected == idx} onClick={() => {
              setselected(idx);
              if(handleClick) handleClick(idx);
            }}>
              {each}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .box{
          position: relative;
          margin-top:-3px;
        }
        .box.true ul {
          position:fixed;
          top:0;
          right:${right}px;
          z-index: 1;
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
        @media only screen and (max-width: 960px)  {
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