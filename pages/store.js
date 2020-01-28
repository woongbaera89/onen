import Floatmenu from '../comps/floatmenu'

export default function StorePage() {
  return ( 
    <div>
      <Floatmenu 
        menu={["gangnam","hongik uni.","seocho"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"}); 
          }
      }}/>
      <div>
        <section>
          <img className="dd" src="../static/store.jpg"/>
        </section>
      </div>
      <style jsx>{`
        img {
          vertical-align:top;
        }
        section {
          text-align:center;
        }
      `}</style>
    </div>
  )
}