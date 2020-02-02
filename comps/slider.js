import React, { useState } from 'react'

export default function slider({data}) {
  const [i, setI] = useState(0)
  const [x, setX] = useState(0)

  return (
    <div className="slider">
      <div className="bt-arrow left" onClick={() => {
        let n = i-1;
        if(n<0) n = data.length-1;
        setI(n)
        setX(n * -100)
      }}>
        <div className="arrow "></div>
      </div>
      <div className="bt-arrow right" onClick={() => {
        let n = i+1;
        if(n>=data.length) n = 0;
        setI(n)
        setX(n * -100)
      }}>
        <div className="arrow "></div>
      </div>
      <div className="slider-wrap">
      {data && data.map((each, idx) => (
        <div key={'slide'+idx} className="slide" style={{left:idx*100+'%'}} >
          <img src={each}/>
        </div>
      ))}
      </div>
      <style jsx>{`
        .bt-arrow{
          cursor:pointer;
          position:absolute;
          top:50%;
          z-index:9;
          margin-top:-50px;
          width:100px;
          height:100px;
          padding:20px;
        }
        .bt-arrow > div {
          width:60px;
          height:60px;
          border-top:2px solid #FF7575;
        }
        .bt-arrow.left {
          left:1%;
          transform:rotate(-45deg)
        }
        .bt-arrow.left > div {
          border-left:2px solid #FF7575;
        }
        .bt-arrow.right {
          right:1%;
          transform:rotate(45deg)
        }
        .bt-arrow.right > div {
          border-right:2px solid #FF7575;
        }

      .slider {
        margin:36px;
        position:relative;
        overflow:hidden;
      }
      img{
        vertical-align:top;
      }
      .slide{
        position:absolute;
        top:0;
        width:100%;
        z-index:1;
      }
      .slide:first-child {
        position:static;
      }
      .slider-wrap{
        transition: transform 0.6s ease;
        transform: translateX(${x}%);
      }
      @media only screen and (max-width: 960px)  {

        .slider {
          margin:18px;
        }
        .bt-arrow{
          cursor:pointer;
          position:absolute;
          top:50%;
          z-index:9;
          margin-top:-20px;
          width:40px;
          height:40px;
          padding:10px;
        }
        .bt-arrow > div {
          width:20px;
          height:20px;
          border-top:1px solid #FF7575;
        }
        .bt-arrow.left {
          left:1%;
          transform:rotate(-45deg)
        }
        .bt-arrow.left > div {
          border-left:1px solid #FF7575;
        }
        .bt-arrow.right {
          right:1%;
          transform:rotate(45deg)
        }
        .bt-arrow.right > div {
          border-right:1px solid #FF7575;
        }
      }
      `}</style>
    </div>
  )
}