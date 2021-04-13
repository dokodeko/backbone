import style from "./index.module.css";

import Card from "../../ui/Card/Card";
import CardTituloVerde from "../../ui/Card/CardTituloVerde";

const items = [
  {
    id: 1,
    posicion: style.texto_centro,
    texto1: "ACCELERATE DIGITAL",
    texto2: "TRANSFORMATION",
    salto: true,
    color: true,
    texto:
      "With our unified solution, avoid months or years of product development to drive the digital transformation that is necessary to stay relevant in today's modern market",
  },
  {
    id: 2,
    posicion: style.texto_centro,

    texto1: "GENERATE",
    texto2: "INSTANT ROI",
    salto: true,
    color: false,
    texto:
      "Automated processes and upskilled workforce impact your bottom line directly through cost reduction and revenue maximization. ",
  },
  {
    id: 3,
    posicion: style.texto_centro,

    texto1: "ADAPT AND ",
    texto2: "EVOLVE",
    salto: true,
    color: true,
    texto:
      "Your company is an ever-evolving being with changing needs. Adaptability is engrained into our engine so that your processes adapt too. ",
  },
];

const AnalyticsIndex = () => {
  return (
    <section
      id="analytics_index"
      className={`contenedor flex_box ${style.contenedor_analytics}`}
    >
      <h2
        className={`colorBlanco text-center titulo_tamano titulo ${style.titulo_analytics}`}
      >
        WHAT IS
        <br />
        <span className="colorVerde">ANALYTIC PROCESS AUTOMATION</span>
      </h2>
      <p className="colorBlanco">
        Analytic Process Automation is the technology to empower data, automate
        processes, and upskill workforce. It is agnostic to any industry or area
        within companies.
      </p>
      <div className={`flex_box mx-auto ${style.contenedor_analytics_cards}`}>
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              texto={item.texto}
              totalCards={style.card_3}
              fondo={style.fondo_card}
            >
              <CardTituloVerde
                key={index}
                posicion={item.posicion} 
                texto1={item.texto1}
                texto2={item.texto2}
                color={item.color}
                salto={item.salto}
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
};
export default AnalyticsIndex;
