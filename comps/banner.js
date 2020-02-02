import React, {useState} from 'react'

function banner(){

  const handleSubmit = (e) => { 
    e.preventDefault();
    const policy = document.getElementById("onen_policy").checked;
    if(!policy) {
      alert("개인정보 취급방침에 동의해주세요.");
      return;
    }

    const name = document.getElementById("onen_name").value;
    const phone = document.getElementById("onen_phone").value;

    const bodyJson ={
      name,
      phone,
    }
    
    fetch("http://onen.co.kr/contacts", {
      method:"POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(bodyJson), 
    })
    .then(response => {
      if(response.status == 200) {
        alert("신청이 접수되었습니다.")
        return response.json();
      }else {
        alert("오류가 발생했습니다. 다시 시도해주세요.")
      }
    })
    .then(data => {
      console.log(data)
    });
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="banner">
      <div className="desc">창업문의<br/> <a href="tel:070-8897-4947">070-8897-4947</a></div>
      <div className="inputbox">
        <div>
          <label>이름</label><input type="text" id="onen_name" name="onen_name" required/><br/>
          <label>연락처</label><input type="tel" id="onen_phone" name="onen_phone" required/><br style={{display:'block'}}/>
          <input type="checkbox" id="onen_policy" name="onen_policy" required/>
          <label  htmlFor="onen_policy" style={{border:0, fontSize:8, letterSpacing:-1 }}>개인정보 취급방침에 동의</label>

          <button className="policy-bt" onClick={() => {
            const el = document.getElementById("onen_policytext");
            console.log(el.style.display)
            if(el.style.display !== 'block') el.style.display = 'block';
            else el.style.display = 'none';
          }}>전문보기</button>

          <div id="onen_policytext" className="policy-text" onClick={() => {
            const el = document.getElementById("onen_policytext");
            console.log(el.style.display)
            if(el.style.display !== 'block') el.style.display = 'block';
            else el.style.display = 'none';
          }}>
            <b>개인정보 수집 및 활용동의</b><br/><br/>
            1. 개인정보의 수집 및 이용 목적<br/>
            가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.<br/>
            2. 처리하는 개인정보 항목<br/>
            - 필수항목 : 이름, 연락처, 이메일 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)<br/>
            - 선택항목 : 창업희망지역, 점포보유여부<br/>
            3. 개인정보의 처리 및 보유 기간<br/>
            ① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.<br/>
            ② 개인정보의 보유 기간은 5년입니다.
          </div>  
        </div>
      </div>
        <div>
          <input type="submit" id="submit" value="상담신청"/>
        </div>
      <style jsx>{`
        #onen_policy {
          margin-top:8px;
        }
        .policy-bt {
          color:#fff;
          background:#B2B2B2;
          -webkit-appearance:none;
          border-radius:0;
          border:0;
          font-size:10px;
          padding:0 4px;
          position:relative;
          top:-2px;
          color:#FF7575;
          background:#fff;
          letter-spacing:-1px; margin-left:6px;
        }
        input {
          border-radius:0;
        }
        .policy-text {
          display:none;
          position:fixed;
          left:50%;
          bottom:100px;
          width:320px;
          margin-left:-160px;
          height:auto;
          z-index:9999;
          background:#fff;
          box-shadow:0 4px 12px rgba(0,0,0,0.3);
          padding:24px;
          font-size:14px;
        }
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
        .policy-text br {
          display:block;
        }
        .banner .desc {
          font-size:28px;
          font-weight:bold;
        }
        .inputbox {
          display:flex;
        }

        label, #onen_name, #onen_phone {
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
        #onen_name, #onen_phone  {
          padding-left:17px;
          margin-right:17px;
          margin-left:-1px;
        }
        #onen_name {
          width:140px;
        }
        #onen_phone {
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
          -webkit-appearance:none;
          border-radius:0;
        }


        @media only screen and (min-width: 1364px)  {
          .banner {
            left:50%;
            margin-left:-682px;
            width:1364px
          }
        }
        @media only screen and (max-width: 960px)  {
          .policy-bt {
            font-size:8px;
            top:-6px;
          }
          .desc{
            padding-right:8px;
          }
            #onen_policy {
              margin-top:4px;
            }
          .banner {
            height:80px; 
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
            margin-left:8px;
          }
          label, #onen_name, #onen_phone {
            border-bottom:1px solid #000;
            font-size:10px;
            margin:0;
            height:20px;
            line-height:20px;
            font-weight:bold;
            vertical-align:top;
          }
          #onen_name {
            width:99px;
            padding-left:16px;
          }
          #onen_phone {
            width:90px;
            padding-left:8px;
          }

        }
      `}</style>
    </div>
    </form>  
  )
}

export default banner