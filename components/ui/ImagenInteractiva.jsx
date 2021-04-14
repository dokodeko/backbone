import style from "./ui.module.css";
const ImagenInteractiva = (props) => {
  const { fondoImagen } = props;
  return <div className={`${style.imagen_interactiva}`}>
      <img src={fondoImagen}/>
  </div>;
};
export default ImagenInteractiva;
