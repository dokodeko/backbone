import { useRef } from "react";
import style from "./ui.module.css";
import animaciones from "./animaciones.module.css";
import useOnScreen from "../../hooks/useObserver";

const SectionCustom = (props) => {
  const {
    numero,
    titulo,
    parrafo1,
    textoVerde,
    parrafo2,
    parrafo3,
    textoVerde2,
    posicion,
    imagen,
    opacidades,
  } = props;
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  return (
    <div className={`${style.cont_sections} ${opacidades}`} ref={ref}>
      <div className="flex_box">
        <div
          className={`${style.cont_1} ${
            onScreen ? animaciones.fadeInLeft : ""
          }`}
        >
          <h5>
            {numero}. <span>{titulo}</span>
          </h5>
          <p className="colorBlanco">
            {parrafo1} <span className="colorAzul">{textoVerde}</span>
            {parrafo2}
            <span className="colorAzul">{textoVerde2}</span>
            {parrafo3}
          </p>
          <div className={`flex_box`}>{props.cards}</div>
        </div>

        {props.estadoImagen ? (
          <div
            className={`${posicion} ${style.cont_2} ${
              onScreen ? animaciones.fadeInRight2 : ""
            }`}
          >
            <img src={imagen} />
          </div>
        ) : (
          <div className={style.fondoMapa}>
            <p id={style.status}>
              Status/account level
              <br /> decisions
            </p>
            <p id={style.escalotions}>Escalations</p>
            <p id={style.level}>
              Aditional level
              <br /> requests
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default SectionCustom;
