import style from "./cards.module.css";

const Card = (props) => {
  const { texto, texto2, textoBold, totalCards, fondo, custom_parrafo } = props;

  return (
    <>
      <div
        className={`${style.card_custom} ${totalCards} ${fondo} `}
        onClick={props.myClick}
      >
        {props.children}
        <p className={`colorBlanco  ${custom_parrafo}`}>
          {texto}
          <span>
            {props.salto ? <br /> : ""}
            {textoBold}
            <br />
          </span>
          {texto2}
        </p>

        {props.flecha ? (
          <div className={style.flecha}>
            <img src="/png/index/flecha.png" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Card;
