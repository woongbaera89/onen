import Floatmenu from '../comps/floatmenu'

function BrandPage() {
  return ( 
    <div className="brand">
      <Floatmenu 
        menu={["vision","brand_story","campaign","BI"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"});
            // window.scrollTo(0, el.getBoundingClientRect().top)   
          }
      }}/>
      <div>
        <section>
          <img src="../static/brand_vision.jpg"/>
        </section>
        <section>
          <img src="../static/brand_story.jpg"/>
        </section>
        <section>
          <img src="../static/brand_campaign.jpg"/>
        </section>
        <section>
          <img src="../static/brand_bi.jpg"/>
        </section>
      </div>
      <style jsx>{`
        .brand img {
          vertical-align:top;
        }
      `}</style>
    </div>
  )
}

export default BrandPage