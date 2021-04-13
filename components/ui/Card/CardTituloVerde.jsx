import style from "./cards.module.css";

export default function CardTituloVerde(props) {
  const { texto1, texto2, tamanoFuente, posicion } = props;
  return (
    <h4
      className={`titulo ${style.titulo_card} ${tamanoFuente} ${posicion} ${
        (style.titulo_card, props.color ? style.colorVerde : style.colorBlanco)
      }`}
    >
      {texto1} {props.salto ? <br /> : ""} <span>{texto2}</span>
    </h4>
  );
}
 