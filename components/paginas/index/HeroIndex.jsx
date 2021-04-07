import Boton from "../../ui/Boton";
import style from "./index.module.css";
const HeroIndex = () => {
  return (
    <section className={`contenedor flex_box ${style.fondo}`} id="hero_index">
      <div className={style.cont_izquierda}>
        <h1 className="colorVerde titulo">
          MAKE YOUR INSTITUTION
          <br /> <span className="colorBlanco">INTELLIGENT</span>
        </h1>
        <p>
          Boolean is an analytic process automation (APA) engine that empowers
          your enterprise through your data, processes and people, making your
          institution a seamlessly interconnected, intelligent and autonomous
          being.
        </p>
        <Boton texto="Request a demo" color={style.boton} />
      </div>
    </section>
  );
};
export default HeroIndex;
