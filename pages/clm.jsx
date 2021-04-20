import { useRef } from "react";
import Layout from "../components/layout/Layout";
import HeroClm from "../components/paginas/Clm/HeroClm";
import FintechClm from "../components/paginas/Clm/FintechClm";
import SectionCustom from "../components/ui/Sections";
import Card from "../components/ui/Card/Card";
import CardImagen from "../components/ui/Card/CardImagen";
import RealTImeClm from "../components/paginas/Clm/RealTimeClm";
import ImagenInteractiva from "../components/ui/ImagenInteractiva";

import useObserverCustom from "../hooks/useObserverCustom";
import useOnScreen from "../hooks/useObserver";

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
  fondoImagen: "/png/logos/p01.png",
  cards: [
    {
      textoBlanco: "Ingest data",
      texto2: "and send back instructions",
      imagen: "/png/identy/scard_1.png",
    },
    {
      textoBlanco: "Ingest data",
      texto2: "and send back instructions",
      imagen: "/png/identy/scard_2.png",
    },
    {
      textoBlanco: "Ingest data",
      texto2: "and send back instructions",
      imagen: "/png/identy/scard_3.png",
    },
    {
      textoBlanco: "Ingest data",
      texto2: "and send back instructions",
      imagen: "/png/identy/scard_4.png",
    },
  ],
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
const section3 = {
  numero: "03 ",
  titulo: "MONITORING",

  parrafo1: "Detect ",
  textoVerde: "money laundering ",
  parrafo2: "& other types of ",
  textoVerde2: "financial crime ",
  parrafo3:
    "from your customers with a full-picture continuous monitoring and establish automated procedures for our own criteria.",
  estadoImagen: true,
  imagen: "/png/frame.png",

  cards: [
    {
      textoBlanco: "Watchlists",
      texto2: "External data sources",
      imagen: "/png/monitoring/card_1.png",
    },
    {
      textoBlanco: "Transaction Monitoring",
      texto2: "Suspicious individual events",
      imagen: "/png/monitoring/card_2.png",
    },
    {
      textoBlanco: "Risk Profiling",
      texto2: "Suspicious overall events",
      imagen: "/png/monitoring/card_3.png",
    },
  ],
};
const section4 = {
  numero: "04 ",
  titulo: "COMPLIANCE",
  parrafo1: "Streamline ",
  textoVerde: "compliance operations ",
  parrafo2: "to avoid fines whilst minimizing friction with your clients. ",
  estadoImagen: true,
  imagen: "/png/frame.png",

  cards: [
    {
      textoBlanco: "Automated regulatory reports",

      imagen: "/png/compliance/card_1.png",
    },
    {
      texto2: "Case management",
      imagen: "/png/compliance/card_2.png",
    },
    {
      texto2: "Institutional risk assessment",
      imagen: "/png/compliance/card_3.png",
    },
    {
      texto2: "Anonymous inbox",
      imagen: "/png/compliance/card_4.png",
    },
    {
      texto2: "Audit & authority requirements",
      imagen: "/png/compliance/card_5.png",
    },
  ],
};
export default function Clm() {
  const ref2 = useRef();
  const OnScreen = useOnScreen(ref2);
  return (
    <div className={OnScreen ? "p-fixed" : "p-fixed-out"}>
      <Layout>
        <HeroClm />
        <FintechClm />
        <section>
          <ImagenInteractiva Imagen="/png/logos/p01.png" />

          <SectionCustom
            numero={section1.numero}
            titulo={section1.titulo}
            parrafo1={section1.parrafo1}
            textoVerde={section1.textoVerde}
            parrafo2={section1.parrafo2}
            imagen={section1.imagen}
            estadoImagen={section1.estadoImagen}
            posicion={style.custom_imagen}
            cards={
              <>
                {section1.cards.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      texto={card.texto}
                      textoBold={card.textoBlanco}
                      texto2={card.texto2}
                      totalCards={style.cards_4}
                      fondo={style.fondo_card_clm}
                      custom_parrafo={style.parrafo_custom}
                    >
                      <CardImagen key={index} imagen={card.imagen} />
                    </Card>
                  );
                })}
              </>
            }
          />

          <div ref={ref2}>
            <SectionCustom
              numero={section2.numero}
              titulo={section2.titulo}
              imagen={section2.imagen}
              cards={
                <>
                  <p className="mt-n1 mb-2 mb-lg-0 colorBlanco">
                    Onboard more customers{" "}
                    <span className="colorAzul"> quickly</span> and
                    <span className="colorAzul"> safely</span> with better
                    decision <br />
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
            <SectionCustom
              numero={section3.numero}
              titulo={section3.titulo}
              parrafo1={section3.parrafo1}
              textoVerde={section3.textoVerde}
              parrafo2={section3.parrafo2}
              textoVerde2={section3.textoVerde2}
              parrafo3={section3.parrafo3}
              imagen={section3.imagen}
              estadoImagen={section3.estadoImagen}
              posicion={style.custom_imagen}
              cards={
                <>
                  {section3.cards.map((card, index) => {
                    return (
                      <Card
                        key={index}
                        texto={card.texto}
                        textoBold={card.textoBlanco}
                        texto2={card.texto2}
                        totalCards={style.cards_3}
                        fondo={style.fondo_card_clm}
                        custom_titulo={style.custom_titulo}
                        custom_parrafo={style.parrafo_custom}
                      >
                        <CardImagen key={index} imagen={card.imagen} />
                      </Card>
                    );
                  })}
                </>
              }
            />{" "}
          </div>
          <SectionCustom
            numero={section4.numero}
            titulo={section4.titulo}
            parrafo1={section4.parrafo1}
            textoVerde={section4.textoVerde}
            parrafo2={section4.parrafo2}
            imagen={section4.imagen}
            estadoImagen={section4.estadoImagen}
            posicion={style.custom_imagen}
            cards={
              <>
                {section4.cards.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      texto={card.texto}
                      textoBold={card.textoBlanco}
                      texto={card.texto2}
                      totalCards={style.cards_5}
                      fondo={style.fondo_card_clm}
                      custom_titulo={style.custom_titulo}
                      custom_parrafo={style.parrafo_custom2}
                    >
                      <CardImagen key={index} imagen={card.imagen} />
                    </Card>
                  );
                })}
              </>
            }
          />
        </section>
        <RealTImeClm />
      </Layout>
    </div>
  );
}
