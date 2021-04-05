import style from "./index.module.css";
import Card from "../ui/Card/Card";
import CardTituloVerde from "../ui/Card/CardTituloVerde";

const CardObjet = {
  Texto: "Pruba",

  TituloVerde: {
    primero: "ACCELERATE",
    ColorVerde: "colorVerde",
    segundo: "DIGITAL TRANSFORMATION",
  },
};

const AnalyticsIndex = () => {
  return (
    <section
      id="analytics_index"
      className={`contenedor flex_box ${style.contenedor_analytics}`}
    >
      <h2
        className={`colorVerde text-center titulo_tamano titulo ${style.titulo_analytics}`}
      >
        WHAT IS
        <br />
        <span className="colorBlanco">ANALYTIC PROCESS AUTOMATION</span>
      </h2>
      <p className="colorBlanco">
        Analytic Process Automation is the technology to empower data, automate
        processes, and upskill workforce. It is agnostic to any industry or area
        within companies.
      </p>
      <div className="flex_box w-100">
        <Card texto="prsad">
          <CardTituloVerde
            texto1="sdgjdsfnhgsdkgfbe"
            texto2="sfsadgfasd"
            salto={true}
            color={true}
          />
        </Card>
      </div>
    </section>
  );
};
export default AnalyticsIndex;
