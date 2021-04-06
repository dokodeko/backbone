import style from "./cards.module.css";

const Card = (props) => {
  const { texto, totalCards } = props;

  const cuatro_cards = style.card_4;
  return (
    <div className={`${style.card_custom} ${totalCards}`}>
      {props.children}
      <p className="colorBlanco">{texto}</p>
    </div>
  );
};
export default Card;
