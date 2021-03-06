import style from "./cards.module.css";

const Card = (props) => {
  const { texto, texto2, textoBold, totalCards, fondo, custom_parrafo, activo, clm, click } = props;

  return (
    <>
      <div
        className={`${style.card_custom} ${totalCards} ${fondo} 
        ${activo ? style.active_card  : style.not_active }
        ${clm ? style.not_clm :""} ${click ? style.no_click : ""}  `}
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
