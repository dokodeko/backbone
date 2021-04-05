import style from "./ui.module.css";
const Card = (props) => {
  const { texto } = props;
  return (
    <div className={style.card_custom}>
      <h4>{props.children}</h4>
      <p className="colorBlanco">{texto}</p>
    </div>
  );
};
export default Card;
