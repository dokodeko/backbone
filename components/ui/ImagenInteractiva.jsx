import style from "./ui.module.css";
const ImagenInteractiva = (props) => {
  const { imagenSrc, estilo } = props;
  return (
    <img
      src={imagenSrc}
      id="ii"
      className={`${style.imagen_interactiva} ${estilo}`}
    />
  );
};
export default ImagenInteractiva;
