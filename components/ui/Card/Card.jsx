import style from "./cards.module.css"; 
 

const Card = (props) => {
  const { texto, texto1 } = props;
  return (
    <div className={style.card_custom}>
      {props.children}
      <p className="colorBlanco">{texto}</p>
    </div>
  );
};
export default Card;
