import style from "./ui.module.css";
import Link from "next/link";

const Boton = (props) => {
  const { texto, color, enlace } = props;
  return (
    <Link href={enlace} passHref>
      <button className={color + " " + style.boton}>{texto}</button>
    </Link>
  );
};
export default Boton;
