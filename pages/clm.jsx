import Layout from "../components/layout/Layout";
import HeroClm from "../components/paginas/Clm/HeroClm";
import FintechClm from "../components/paginas/Clm/FintechClm";
import SectionCustom from "../components/ui/sections";
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
  numero: "01 ",
  titulo: "IDENTITY",
  parrafo1: "This is your control ",
  textoVerde: "center and interface ",
  parrafo2:
    "between the real world and your team’s rules. Leverage internal and external data to execute informed manual or automatic decisions, while minimizing back office burden.",
  imagen: "/png/frame.png",
};

const cards1 = [
  {
    texto: "",
  },
];

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
                {cards1.map((card, index) => {
                  return (
                    <Card>
                      <CardImagen />
                    </Card>
                  );
                })}
              </>
            }
          />
        </section>
      </Layout>
    </>
  );
}
