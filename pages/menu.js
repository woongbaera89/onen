import Floatmenu from '../comps/floatmenu'

export default function MenuPage() {
  return ( 
    <div>
      <Floatmenu 
        menu={["korean","japanese","chinese"]}
        handleClick={(idx) => {
          const el = document.getElementsByTagName(`section`)[idx];
          if(el) {
            el.scrollIntoView({behavior: "smooth"}); 
          }
      }}/>
      <div>
        <section>
          <img className="dd" src="../static/menu_1.jpg"/>
          <img className="mm" src="../static/menu_1_m.jpg"/>
        </section>
        <section>
          <img className="dd" src="../static/menu_2.jpg"/>
          <img className="mm" src="../static/menu_2_m.jpg"/>
        </section>
        <section>
          <img className="dd" src="../static/menu_3.jpg"/>
          <img className="mm" src="../static/menu_3_m.jpg"/>
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