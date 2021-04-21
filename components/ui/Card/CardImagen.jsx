import style from "./cards.module.css";

const CardImagen = (props) => {
  const { imagen } = props;

  return (
    <div className={!props.tamano ? style.cont_imagen : style.cont_imagen2}>
      <img src={imagen} />
    </div>
  );
};
export default CardImagen;
