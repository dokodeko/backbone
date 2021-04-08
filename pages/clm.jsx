import Layout from "../components/layout/Layout";
import HeroClm from "../components/paginas/Clm/HeroClm";
import FintechClm from "../components/paginas/Clm/FintechClm";
import SectionCustom from "../components/ui/Sections";
import Card from "../components/ui/Card/Card";
import CardImagen from "../components/ui/Card/CardImagen";

import style from "../components/ui/ui.module.css";
const section1 = {
  numero: "01 ",
  titulo: "IDENTITY",

  parrafo1: "This is your control ",
  textoVerde: "center and interface ",
  parrafo2:
    "between the real world and your team’s rules. Leverage internal and external data to execute informed manual or automatic decisions, while minimizing back office burden.",
  estadoImagen: true,
  imagen: "/png/frame.png",
};
const section2 = {
  numero: "02",
  titulo: "ONBOARDING",
  imagen: "/png/mapa.png",
  listas: [
    {
      texto:
        "Onboard more customers quickly and safely with better decision making.",
    },
    {
      texto:
        "Ingest data from external verification services or our selected native integrations",
    },
    {
      texto: "Establish your rules for automatic decisions or manual revisions",
    },
    { texto: "Establish scenario-based flows and data requirements " },
    { texto: "Your own risk tolerance" },
  ],
};

export default function Clm() {
  return (
    <>
      <Layout>
        <HeroClm />
        <FintechClm />
        <section>
          <SectionCustom
            numero={section1.numero}
            titulo={section1.titulo}
            parrafo1={section1.parrafo1}
            textoVerde={section1.textoVerde}
            parrafo2={section1.parrafo2}
            imagen={section1.imagen}
            estadoImagen={section1.estadoImagen}
            cards={
              <>
                <Card>
                  <CardImagen />
                </Card>
              </>
            }
          />
          <SectionCustom
            numero={section2.numero}
            titulo={section2.titulo}
            imagen={section2.imagen}
            cards={
              <>
                <p className="mt-n1">
                  Onboard more customers <span> quickly</span> and
                  <span> safely</span> with better decision <br />
                  making.
                </p>
                <ul className={style.lista}>
                  {section2.listas.map((lista, index) => {
                    return (
                      <li className="colorBlanco" key={index}>
                        {lista.texto}
                      </li>
                    );
                  })}
                </ul>
              </>
            }
          />
        </section>
      </Layout>
    </>
  );
}
