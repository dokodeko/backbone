import Boton from "../../ui/Boton";
import style from "./bolean.module.css";
const HeroBolean = () => {
  return (
    <section className={`contenedor flex_box ${style.fondo}`} id="hero_index">
      <div className={style.cont_izquierda}>
        <h1 className="colorBlanco titulo">
          MAKE YOUR INSTITUTION
          <br /> <span className="colorVerde">INTELLIGENT</span>
        </h1>
        <p>
          <span className="titulo">Boolean </span>is an analytic process
          automation (APA) engine that
          <span className="titulo"> empowers your enterprise</span> through your
          data, processes and people, making your institution a seamlessly
          interconnected, intelligent and autonomous being.
        </p>
        <Boton 
        enlace="/"
        texto="Request a demo" color={style.boton} />
      </div>
    </section>
  );
};
export default HeroBolean;
