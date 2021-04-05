import style from "./index.module.css";
import Card from "../ui/Card";

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
        <Card texto="Prueba">
          <h4></h4>
        </Card>
      </div>
    </section>
  );
};
export default AnalyticsIndex;
