import React, {useState} from 'react'

function banner(){

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="banner">
      <div className="desc">창업문의<br/> <a href="tel:1588-0000">1588-0000</a></div>
      <div className="inputbox">
        <div>
          <label>이름</label><input type="text" id="name" name="onen_name" required/><br/>
          <label>연락처</label><input type="tel" id="phone" name="onen_phone" required/>  
        </div>
        <div>
          <input type="submit" id="submit" value="상담신청"/>
        </div>
      </div>
      <style jsx>{`
        .banner {
          z-index:99;
          display:flex;
          position:fixed;
          bottom:0;
          left:0;
          right:0;
          max-width:1364px;
          height:76px; 
          background:#FF7575;
          border-top:3px solid #000;
          justify-content:space-between;
          align-items:center;
          padding:0 32px;
        }
        .banner br {
          display:none;
        }
        .banner .desc {
          font-size:28px;
          font-weight:bold;
        }
        .inputbox {
          display:flex;
        }

        label, #name, #phone {
          display:inline-block;
          background:none; 
          border:0;
          border-bottom:1.5px solid #000;
          font-size:17px;
          margin:0;
          height:29px;
          line-height:29px;
          font-weight:bold;
          vertical-align:top;
        }
        #name, #phone  {
          padding-left:17px;
          margin-right:17px;
          margin-left:-1px;
        }
        #name {
          width:140px;
        }
        #phone {
          width:200px;
        }

        #submit {
          display:inline-block;
          font-size:16px;
          line-height:29px;
          text-align:center;
          width:124px;
          height:29px;
          color:#FF7575;
          background:#000;
          font-weight:bold;
          border:0;
        }


        @media only screen and (min-width: 1364px)  {
          .banner {
            left:50%;
            margin-left:-682px;
            width:1364px
          }
        }
        @media only screen and (max-width: 960px)  {
          .banner {
            height:70px; 
            padding: 0 20px;
            border-top:1.5px solid #000;
          }
          .banner br {
            display:initial;
          }
          .banner .desc {
            font-size:15px;
            font-weight:bold;
          }
          #submit {
            width:40px;
            height:40px;
            line-height:14px;
            padding-top:3px;
            font-size:11px;
            word-break:break-all;
            white-space:pre-line;
            margin-left:14px;
          }
          label, #name, #phone {
            border-bottom:1px solid #000;
            font-size:10px;
            margin:0;
            height:20px;
            line-height:20px;
            font-weight:bold;
            vertical-align:top;
          }
          #name {
            width:96px;
            padding-left:16px;
          }
          #phone {
            width:88px;
            padding-left:8px;
          }

        }
      `}</style>
    </div>
    </form>  
  )
}

export default banner