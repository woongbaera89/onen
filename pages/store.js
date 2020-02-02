import Floatmenu from '../comps/floatmenu'
import Slider from '../comps/slider'

export default function StorePage() {
  return ( 
    <div>
      <Floatmenu 
        menu={["gangnam","hongik uni.","IFC mall"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"}); 
          }
      }}/>
      <div>
        <section>
          <div className="title">원앤 강남점</div>
          <div className="desc">
            서울시 강남구 테헤란로 4길 6, 센트럴 푸르지오시티  지하 1층 121호<br/>
            02. 538. 8972<br/>
            영업시간 : 11:30~22:00
          </div>
          <img className="map" src="../static/store_gangnam.jpg"/>
          <Slider data={["../static/gangnam1.jpg","../static/gangnam2.jpg","../static/gangnam3.jpg","../static/gangnam4.jpg"]}/>
        </section>
        <section>
          <div className="title">원앤 홍대점</div>
          <div className="desc temp">오픈예정</div>
        </section>
        <section>
          <div className="title">원앤 IFC몰점</div>
          <div className="desc temp">오픈예정</div>
        </section>
      </div>
      <style jsx>{`
        .title {
          color:#FF7575;
          font-weight:bold;
          font-size:22px;
          letter-spacing:-0.5px;
          padding:36px 30px 12px;
        }
        .desc {
          font-size:20px;
          letter-spacing:-0.5px;
          padding:0 30px;
        }
        .desc.temp::after{
          content:'';
          display:block;
          background:#fff;
          height:300px;
        }
        img {
          vertical-align:top;
        }
        section {
          text-align:left;
        }
        .map {
          width:680px;
          max-width:100%;
        }
        @media only screen and (max-width: 960px)  {
          .title {
            font-size:13px;
            padding:20px 20px 6px;
          }
          .desc {
            font-size:11px;
            padding:0 20px;
          }
        }
      `}</style>
    </div>
  )
}