export default function social() {
    return (
      <div className="social">
        <a href="https://www.instagram.com/one_n_official/" target="_blank">
          <img src="../static/ic_instagram.png"/>
        </a>
        <a href="https://www.youtube.com/channel/one_n_official" target="_blank">
          <img src="../static/ic_youtube.png"/>
        </a>
        <a href="https://www.facebook.com/official.one.n" target="_blank">
          <img src="../static/ic_facebook.png"/>
        </a>
        <style jsx>{`
        
        .social {
          position:absolute;
          right:26px;
          bottom:16px;
          z-index:9;
        }
        .social a img{
          height:38px;
          width:38px;
          margin:0 0 0 10px;
        }
        @media only screen and (max-width: 960px)  {
          .social {
            position:absolute;
            right:20px;
            bottom:12px;
            z-index:9;
          }
          .social a img{
            height:24px;
            width:24px;
            margin:0 0 0 6px;
          }  
        }
        `}</style>
      </div>
    )
}