import style from "./cards.module.css";

const Card = (props) => {
  const { texto, textoBold, totalCards, fondo } = props;

  const cuatro_cards = style.card_4;
  return (
    <div className={`${style.card_custom} ${totalCards} ${fondo}`}>
      {props.children}
      <p className="colorBlanco">
        {texto}
        <span>{textoBold}</span>
      </p>
    </div>
  );
};
export default Card;
