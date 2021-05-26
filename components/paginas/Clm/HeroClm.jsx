import Boton from "../../ui/Boton";
import style from "./clm.module.css";
const HeroClm = () => {
  return (
    <div className="contenedor flex_box fintech">
      <div className={style.cont_imagen_movil}>
        <img src="/png/hero_clm.png" />
      </div>
      <div className={`${style.cont_texto} ${style.cambio}`}>
        <h1 className="colorBlanco">
          SUPERCHARGE <br /> YOUR <span>FINTECH</span>
        </h1>
        <p className="colorBlanco">
          Backbone's cloud-based engine helps large-scale financial institutions
          streamline their operations regarding{" "}
          <span> onboarding, financial crime detection, and compliance.</span>{" "}
          No more data recaptures, system isolation, data mismatch, chaotic file
          management, or missed deadlines.
        </p>
        <Boton enlace="/" texto="Request a demo" color={style.boton} />
      </div>
      <div className={style.cont_imagen}>
        <img src="/png/hero_clm.png" />
      </div>
    </div>
  );
};

export default HeroClm;
