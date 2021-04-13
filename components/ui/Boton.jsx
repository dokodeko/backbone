import style from "./ui.module.css";
const Boton = (props) => {
  const { texto, color } = props;
  return <button className={color + " " + style.boton}>{texto}</button>;
};
export default Boton;
