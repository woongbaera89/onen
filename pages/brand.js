import Floatmenu from '../comps/floatmenu'

export default function BrandPage() {
  return ( 
    <div>
      <Floatmenu 
        menu={["vision","brand_story","campaign","BI"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"});
          }
      }}/>
      <div>
        <section>
          <img className="dd" src="../static/brand_vision.jpg"/>
          <img className="mm" src="../static/brand_vision_m.jpg"/>
        </section>
        <section>
          <img className="dd" src="../static/brand_story.jpg"/>
          <img className="mm" src="../static/brand_story_m.jpg"/>
        </section>
        <section>
          <div className="video-title">now / new<br/><small>원앤에서 즐겨보세요</small></div>
          <iframe src="https://www.youtube.com/embed/6xT4PlPeK80" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
          <div className="video-title">nice shot / nineteen<br/><small>원앤에서 함께하세요</small></div>
          <iframe src="https://www.youtube.com/embed/ETOhai2nvD8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
          <div className="video-title">nonsense / no matter<br/><small>원앤에서 찾아보세요</small></div>
          <iframe src="https://www.youtube.com/embed/2svzivZPazM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section>
          <img className="dd" src="../static/brand_bi.jpg"/>
          <img className="mm" src="../static/brand_bi_m.jpg"/>
        </section>
      </div>
      <style jsx>{`
        section {
          text-align:center;
        }
        img {
          vertical-align:top;
        }
        .video-title {
          font-weight:bold;
          font-size:26px;
          letter-spacing:-0.5px;
          padding:100px 0 24px;
        }
        .video-title small {
          font-size:21px;
        }
        iframe {
          width:720px;
          height:405px;
          margin:0 auto;
        }
        iframe:last-child {
          margin-bottom:50px;
        }
        @media only screen and (max-width: 960px)  {

          .video-title {
            font-weight:bold;
            font-size:15px;
            letter-spacing:-0.5px;
            padding:50px 0 15px;
          }
          .video-title small {
            font-size:11px;
          }
          iframe {
            width:90vw;
            height:50.625vw;
            margin:0 auto;
          }
          iframe:last-child {
            margin-bottom:25px;
          }
        }
      `}</style>
    </div>
  )
}