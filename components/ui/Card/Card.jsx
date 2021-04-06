import style from "./cards.module.css";

const Card = (props) => {
  const { texto, totalCards, fondo } = props;

  const cuatro_cards = style.card_4;
  return (
    <div className={`${style.card_custom} ${totalCards} ${fondo}`}>
      {props.children}
      <p className="colorBlanco">{texto}</p>
    </div>
  );
};
export default Card;
