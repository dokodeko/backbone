import style from "./ui.module.css";

const Parrafos = (props) => {
  const { textoParrafo, textoVerde, textoParrafo2, imagen } = props;
  return (
    <div className={`flex_box ${style.contendor_parrafo}`}>
      <div className={`${style.cont_izquierdo}`}>
        {props.children}
        <p className={` ${style.parrafo}`}>
          {textoParrafo}
          <span>{textoVerde}</span>
          {textoParrafo2}
        </p>
      </div>
      <div className={`${style.cont_derecho}`}>
        <img src={imagen} alt="" />
      </div>
    </div>
  );
};
export default Parrafos;
