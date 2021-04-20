import style from "./ui.module.css";
const ImagenInteractiva = (props) => {
  const { imagenSrc, estilo } = props;
  return (
    <div className={`${style.imagen_interactiva} ${estilo}`}>
      <img src={imagenSrc} id="ii" />
    </div>
  );
};
export default ImagenInteractiva;
