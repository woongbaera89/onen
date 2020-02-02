import React, {useEffect, useState} from 'react'

function chapstick(){
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [d, setD] = useState(0)
  const [delay, setDelay] = useState(200)

  useEffect(() => {
    setX(Math.random()*90+5)
    setY(Math.random()*90+5)
    setD(Math.random()*360)
    setDelay(Math.random()*2000)
  }, []);


  return (
    <div>

      <div className="stick"></div>
      <div className="stick2"></div>

      <style jsx>{`
        .stick{
          width:140px;
          height:5px;
          background:#FF7575;
          position:absolute;
          z-index:2;
          left:${x}%;
          top:${y}%;
          transform: rotate(${d}deg);
          transform-origin: bottom left;
          animation-delay: ${delay}ms;
          animation-duration: 2s;
          animation-name: slidein;
          animation-iteration-count: infinite;
        }
        .stick2{
          width:140px;
          height:5px;
          background:#FF7575;
          position:absolute;
          z-index:2;
          left:${x}%;
          top:${y}%;
          margin-left:-6px;
          margin-bottom:-2px;
          transform: rotate(${d+8}deg);
          transform-origin: bottom left;
          animation-delay: ${delay}ms;
          animation-duration: 2s;
          animation-name: slidein2;
          animation-iteration-count: infinite;
        }
        @keyframes slidein {
          0% {
            transform: rotate(${d}deg);
          }

          20% {
          transform: rotate(${d-5}deg);
          }
          
          50% {
          transform: rotate(${d}deg);
          }
          
          100% {
          transform: rotate(${d}deg);
          }
        }
        @keyframes slidein2 {
          0% {
            transform: rotate(${d+8}deg);
          }
          20% {
          transform: rotate(${d+12}deg);
          }
          
          50% {
          transform: rotate(${d+8}deg);
          }
          100% {
          transform: rotate(${d+8}deg);
          }
        }
        @media only screen and (max-width: 960px)  {
          .stick{
            width:70px;
            height:3px;
          }
          .stick2{
            width:70px;
            height:3px;
            margin-left:-3px;
            margin-bottom:-1px;
          }

        }
      `}</style>
    </div>
  )
}

export default chapstick