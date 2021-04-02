import style from "./ui.module.css";
const Boton = (props) => {
  const { texto, color } = props;
  return <boton className={color + " " + style.boton}>{texto}</boton>;
};
export default Boton;
