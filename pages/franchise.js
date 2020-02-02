import Floatmenu from '../comps/floatmenu'

export default function FranchisePage() {
  return ( 
    <div>
      <Floatmenu 
        menu={["promise","knowhow","cost"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"}); 
          }
      }}/>
      <div>
        <section>
          <img className="dd" src="../static/franchise_1.jpg"/>
          <img className="mm" src="../static/franchise_1_m.jpg"/>
        </section>
        <section>
          <img className="dd" src="../static/franchise_2.jpg"/>
          <img className="mm" src="../static/franchise_2_m.jpg"/>
        </section>
        <section>
          <img className="dd" src="../static/franchise_3.jpg"/>
          <img className="mm" src="../static/franchise_3_m.jpg"/>
          <div className="contact">
            <div className="title">창업상담문의</div>

            <input type="checkbox" id="policy" name="policy" required/>
            <label htmlFor="policy">개인정보 취급방침을 읽었으며 이에 동의합니다</label>

            <button className="policy-bt" onClick={() => {
              const el = document.getElementById("policytext");
              console.log(el.style.display)
              if(el.style.display !== 'block') el.style.display = 'block';
              else el.style.display = 'none';
            }}>전문보기</button>

            <div id="policytext" className="policy-text">
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
            
            <div style={{width:'100%', height:1, background:'#aaa', marginTop:24}}></div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const policy = document.getElementById("policy").checked;
              if(!policy) {
                alert("개인정보 취급방침에 동의해주세요.");
                return;
              }

              const name = document.getElementById("name").value;
              const phone = document.getElementById("phone").value;
              const email = document.getElementById("email").value;
              const location = document.getElementById("location").value;
              const budget = document.getElementById("budget").value;
              const store = document.getElementById("radio2").checked;
              const content = document.getElementById("content").value;

              const bodyJson ={
                name,
                phone,
                data : {email,location,budget,store,content}
              }
              console.log(bodyJson)
              
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

            }}>

              <div style={{fontSize:18}}>상담자 정보
              <span style={{marginLeft:44, fontSize:'0.8em'}}><i/>네모 표시는 필수입력항목입니다</span>
              </div>

              <br/>
              <label htmlFor="name"><i/>이름</label>
              <input type="text" id="name" name="name" required/>

              <br/>
              <label htmlFor="phone"><i/>연락처</label>
              <input type="text" id="phone" name="phone" required/>

              <br/>
              <label htmlFor="email">이메일</label>
              <input type="text" id="email" name="email" placeholder=""/>

              <br/>
              <label htmlFor="location">창업희망지역</label>
              <input type="text" id="location" name="location" placeholder=""/>

              <br/>
              <label htmlFor="budget">예상창업비용</label>
              <input type="number" id="budget" name="budget" placeholder=""/>
              <label htmlFor="budget" style={{marginLeft:6}}>만원 (숫자만 입력)</label>

              <br/>
              <label >점포보유</label>
              <input name="radio" id="radio1" type="radio" defaultChecked/>
              <label htmlFor="radio1">없음</label> 
              <input name="radio" id="radio2"type="radio"/>
              <label htmlFor="radio2">있음</label>

              <br/>
              <label htmlFor="subject">문의내용</label>
              <textarea id="content" name="subject" placeholder=""></textarea>

              <br/>
              <input type="submit" value="문의하기"/>

            </form>
          </div>
        </section>
      </div>
      <style jsx>{`
        i {
          display:inline-block;
          width:8px;
          height:8px;
          background:#FF7575;
          margin:2px 6px 2px -14px;
        }
        img {
          vertical-align:top;
        }
        .contact {
          padding: 0 120px;
        }
        .title {
          font-size:24px;
          text-align:center;
          font-weight:bold;
          margin-bottom:50px;
        }
        .policy-bt {
          color:#fff;
          width:160px;
          margin-top:-3px;
          float:right;
          background:#B2B2B2;
          -webkit-appearance:none;
          border-radius:0;
          border:0;
          height:36px;
          font-size:16px;
        }
        .policy-text {
          margin-top:24px;
          display:none;
          line-height:1.4em;
          font-size:14px;
        }
        label {
          font-size:16px;
          min-width:120px;
          display:inline-block;
          vertical-align:middle;
        }
        form {
          padding:24px;
        }
        input {
          border-radius:0;
        }
        input, textarea {
          font-size:16px;
          margin:3px 0;
        }
        input[type="checkbox"] {
          width:22px;
          height:22px;
          margin: 0 8px 0 0;
          position:relative;
          bottom:-8px;
        }
        input[type="text"] {
          width:220px;
          height:36px;
        }
        input[type="radio"] {
          display:none;
        }
        input[type="radio"] + label {
          width:110px; 
          height:36px;
          text-align:center;
          line-height:36px;
          border:1px solid #aaa;
          margin:3px 0;
          min-width:20px;
        }
        input[type="radio"]:checked + label {
          background:#000;
          color:#fff;
          border:1px solid #000;
        }
        textarea {
          height:110px;
          width:80%;
          margin-bottom:-90px;
        }
        input[type="submit"] {
          font-size:23px;
          font-weight:bold;
          width:245px;
          height:72px; 
          background:#000;
          color:#fff;
          border:0;
          display:block;
          margin: 120px auto 20px;
        }
        @media only screen and (max-width: 960px)  {
          .contact{
            padding: 0 48px;
            zoom:0.5;
          }
          form {
            padding:0;
          }
        }
      `}</style>
    </div>
  )
}