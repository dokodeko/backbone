import style from "./ui.module.css";
import animaciones from "./animaciones.module.css";
import { useRef } from "react";
import useOnScreen from "../../hooks/useObserver";

const Parrafos = (props) => {
  const {
    textoParrafo,
    textoVerde,
    textoVerde2,
    textoParrafo2,
    textoParrafo3,
    textoParrafo4,
    imagen,
  } = props;
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div className={`flex_box ${style.contendor_parrafo}`} ref={ref}>
      <div
        className={`${style.cont_izquierdo}`}
      >
        {props.children}

        <p className={` ${style.parrafo}`}>
          {textoParrafo}
          <span className="titulo">{textoVerde}</span>
          {textoParrafo2}
          {props.salto ? (
            <>
              <br /> <br />{" "}
            </>
          ) : (
            ""
          )}
          {textoParrafo3}
          <span className="titulo">{textoVerde2}</span>
          {textoParrafo4}
        </p>
      </div>
      <div
        className={`${style.cont_derecho} ${
          onScreen ? animaciones.fadeInRight : ""
        }`}
      >
        <img src={imagen} alt="" className={style.imagen_parrafo} />
      </div>
    </div>
  );
};

export default Parrafos;
