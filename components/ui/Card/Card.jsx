import style from "./cards.module.css";

const Card = (props) => {
  const { texto, texto2, textoBold, totalCards, fondo, custom_parrafo } = props;

  const cuatro_cards = style.card_4;
  return (
    <div className={`${style.card_custom} ${totalCards} ${fondo} `}>
      {props.children}
      <p className={`colorBlanco  ${custom_parrafo}`}>
        {texto}
        <span>
          {textoBold}
          <br />
        </span>
        {texto2}
      </p>
    </div>
  );
};
export default Card;
