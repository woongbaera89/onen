import React, {useEffect, useState} from 'react'
import Makred from 'marked'

function NoticePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://onen.co.kr/notices")
    .then(response => {
      if(response.status == 200) return response.json();
    })
    .then(data => setData(data));
  }, []);

  const openNotice = (target) => {
    const el = document.getElementById("notice"+target);
    if(el) {
      if(el.style.display !== 'block') el.style.display = 'block';
      else el.style.display = 'none';
    }
  }

  return ( 
    <div className="notice">
      <div className="title">원앤의 새로운 소식입니다</div>
      <ul>
        <li className="head">
          <div className="box">
            <div>
              번호
            </div>
            <div>
              제목
            </div>
            <div>
              등록일
            </div>
          </div>
        </li>
        {data.map((each, idx) => (
          <li key={'b'+idx}>
            <div className="box" onClick={openNotice.bind(null, each.id)}>
              <div>
                {data.length-idx}
              </div>
              <div>
                {each.title}
              </div>
              <div>
                {each.created_at.slice(0,10)}
              </div>
            </div>
            <div id={`notice${each.id}`} className="fold hide" 
            dangerouslySetInnerHTML={ {__html: Makred(each.content)} }/>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul, li {
          list-style:none;
          margin:0; 
          padding:0;
        }


        .title {
          font-size:24px;
          text-align:center;
          font-weight:bold;
          margin:50px 0 20px;
        }
        ul {
          padding:30px 30px 60px;
        }
        .box {
          display:flex;
          justify-content:space-between;
          height:36px;
          align-items:center;
          width:100%;
        }
        .fold {
          display:none;
          padding:40px;
        }

        .box div:nth-child(1) {
          text-align:center;
          width:15%;
        }
        .box div:nth-child(2) {
          width:50%;
        }
        .box div:nth-child(3) {
          width:30%;
        }
        li.head {
          font-weight:bold;
          border-top:1px solid #000;
          border-bottom:1px solid #000;
        }
        li:last-child {
          border-bottom:1px solid #000;
        }
        @media only screen and (max-width: 960px)  {
          .notice{
            zoom:0.5;
          }
        }
      `}</style>
    </div>
  )
}

export default NoticePage