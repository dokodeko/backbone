import Parrafos from "../ui/Parrafos";
import CardTituloVerde from "../ui/Card/CardTituloVerde";
import style from "./index.module.css";

const Services = [];

const ServicesIndex = () => {
  return (
    <div className={style.contenedor_services}>
      <Parrafos
        textoParrafo="It allows companies to extract,"
        textoVerde="It allows companies to extract"
        textoParrafo2=", mix and present data from multiple sources in a unified way. This generates more valuable data and communication between multiple systems that previously interacted through manual processes. Boolean is designed to become the company’s central query repository where all operational data coexists and is enriched."
        imagen="/png/frame.png"
      >
        <CardTituloVerde texto1="DATA" texto2="DATA INTEGRATION" />
      </Parrafos>
    </div>
  );
};
export default ServicesIndex;
