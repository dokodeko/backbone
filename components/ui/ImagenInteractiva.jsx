import style from "./ui.module.css";
const ImagenInteractiva = (props) => {
  const { Imagen, estilo } = props;
  return (
    <div className={`${style.imagen_interactiva} ${estilo}`}>
      <img src={Imagen} id="ii" />
    </div>
  );
};
export default ImagenInteractiva;
