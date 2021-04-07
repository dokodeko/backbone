import Layout from "../components/layout/Layout";
import HeroClm from "../components/paginas/Clm/HeroClm";
import FintechClm from "../components/paginas/Clm/FintechClm";
import SectionCustom from "../components/ui/Sections";

import Card from "../components/ui/Card/Card";
import CardImagen from "../components/ui/Card/CardImagen";
const section1 = {
  numero: "01 ",
  titulo: "IDENTITY",
  parrafo1: "This is your control ",
  textoVerde: "center and interface ",
  parrafo2:
    "between the real world and your team’s rules. Leverage internal and external data to execute informed manual or automatic decisions, while minimizing back office burden.",
  imagen: "/png/frame.png",
};
const section2 = {
  numero: "02",
  titulo: "ONBOARDING",
  parrafo1: "Onboard more customers ",
  textoVerde: "quickly ",
  parrafo2: "and ",
  textoVerde2: "safely ",
  parrafo3: "with better decision making.",
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

export default function Prueba() {
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
            parrafo1={section2.parrafo1}
            textoVerde={section2.textoVerde}
            parrafo2={section2.parrafo2}
            textoVerde2={section2.textoVerde2}
            parrafo3={section2.parrafo3}
            cards={
              <>
                <ul>
                  {section2.listas.map((lista, index) => {
                    return <li className="colorBlanco">{lista.texto}</li>;
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
