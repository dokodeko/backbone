import Parrafos from "../ui/Parrafos";
import CardTituloVerde from "../ui/Card/CardTituloVerde";
import style from "./index.module.css";

const services = [
  {
    titulo: { texto1: "DATA", texto2: "INTEGRATION" },
    parrafo: {
      textoParrafo: "It allows companies to",
      textoVerde: "extract, mix and present data",
      textoParrafo2:
        "from multiple sources in a unified way. This generates more valuable data and communication between multiple systems that previously interacted through manual processes. Boolean is designed to become the company’s",
      textoVerde2: "central query repository ",
      textoParrafo4: "where all operational data coexists and is enriched.",
      imagen: "/png/frame.png",
    },
  },
  {
    titulo: { texto1: "NO CODE", texto2: "AUTOMATION" },
    parrafo: {
      textoParrafo:
        "It allows you to do what only developers could do. Free yourself from",
      textoVerde: "complex and repetitive tasks",
      textoParrafo2:
        "and focus your effort and creativity on projects that generate business impact. With our easy to use interface, we have a function blocks ready to automate your needs.",
      salto: true,
      textoParrafo3: "Adjust your",
      textoVerde2: " models, workflows and automations",
      textoParrafo4:
        "anytime according to the changing needs of your business.",
      imagen: "/png/frame.png",
    },
  },
  {
    titulo: { texto1: "DATA", texto2: "EXPLORATION" },
    parrafo: {
      textoParrafo:
        "It helps your company gain new insights by allowing you to.",
      textoVerde: "explore your data in real time",
      textoParrafo2: "through",
      textoVerde2: "pivot tables and data visualizations",
      textoParrafo4:
        "that synthesize relevant information and present it unambiguously. With our growing portfolio of functionality we provide your company with predictive recommendations and allow you to turn them into actions.",
      imagen: "/png/frame.png",
    },
  },
  {
    titulo: { texto1: "DECISIONING", texto2: "ORCHESTRATION", salto: true },
    parrafo: {
      textoParrafo: "We provide our users with",
      textoVerde: "condensed and relevant information",
      textoParrafo2:
        "for decision making. We increase the users' ability to make decisions by presenting business customized information at the appropriate moment. In addition, Boolean provides a single repository for decision making and statistical tracking of results so that actions taken today are accessible and inform tomorrow's decisions.",

      imagen: "/png/frame.png",
    },
  },
  {
    titulo: { texto1: "DELIVERED", texto2: "SERVICES" },
    parrafo: {
      textoParrafo: "Boolean's wide range of outputs makes it the",
      textoVerde: "perfect platform to get your business fully connected.",
      textoParrafo2:
        " As a result of using our engine you will be able to expose APIs, communicate with your customers through multiple channels, generate and send perfectly designed documents, create dashboard reports and feed all of the other systems your company has.",

      imagen: "/png/frame.png",
    },
  },
];

const ServicesIndex = () => {
  return (
    <div className={style.contenedor_services}>
      {services.map((service, index) => {
        return (
          <Parrafos
            key={index}
            textoParrafo={service.parrafo.textoParrafo}
            textoVerde={service.parrafo.textoVerde}
            textoParrafo2={service.parrafo.textoParrafo2}
            textoVerde2={service.parrafo.textoVerde2}
            textoParrafo3={service.parrafo.textoParrafo3}
            textoParrafo4={service.parrafo.textoParrafo4}
            imagen={service.parrafo.imagen}
            salto={service.parrafo.salto}
          >
            <CardTituloVerde
              key={index}
              texto1={service.titulo.texto1}
              salto={service.titulo.salto}
              texto2={service.titulo.texto2}
            />
          </Parrafos>
        );
      })}
    </div>
  );
};
export default ServicesIndex;
