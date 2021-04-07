import style from "./ui.module.css";

const SectionCustom = (props) => {
  const {
    numero,
    titulo,
    parrafo1,
    textoVerde,
    parrafo2,
    textoVerde2,
    posicion,
    imagen,
  } = props;
  return (
    <div className={style.cont_sections}>
      {props.imagen}
      <div className="flex_box">
        <div className={style.cont_1}>
          <h5>
            {numero}. <span>{titulo}</span>
          </h5>
          <p>
            {parrafo1} <span>{textoVerde}</span>
            {parrafo2}
            <span>{textoVerde2}</span>{" "}
          </p>
          <div className={`flex_box`}>{props.cards}</div>
        </div>
        <div className={`${posicion} ${style.cont_2}`}>
          <img src={imagen} />
          {props.imagen2}
        </div>
      </div>
    </div>
  );
};
export default SectionCustom;
