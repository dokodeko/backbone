import style from "./cards.module.css";

const CardImagen = (props) => {
  const { imagen } = props;

  return (
    <div className={style.cont_imagen}>
      <img src={imagen} />
    </div>
  );
};
export default CardImagen;
