import { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import HeroClm from "../components/paginas/Clm/HeroClm";
import FintechClm from "../components/paginas/Clm/FintechClm";
import SectionCustom from "../components/ui/Sections";
import Card from "../components/ui/Card/Card";
import CardImagen from "../components/ui/Card/CardImagen";
import RealTImeClm from "../components/paginas/Clm/RealTimeClm";
import ImagenInteractiva from "../components/ui/ImagenInteractiva";

import useOnScreen from "../hooks/useObserver";
import animaciones from "../components/ui/animaciones.module.css";
import style from "../components/ui/ui.module.css";
import Footer from "../components/layout/Footer";
import { section1, section2, section3, section4 } from "../constantes/clm";

export default function Clm() {
  const ref1 = new useRef();
  /*   const ref2 = new useRef(); */
  const ref3 = new useRef();
  const ref4 = new useRef();
  const ref5 = new useRef();
  const ref6 = new useRef();
  const ref7 = new useRef();
  const ref8 = new useRef();
  const ref9 = new useRef();

  const OnScreen1 = useOnScreen(ref1);
  /*   const OnScreen2 = useOnScreen(ref2); */
  const OnScreen3 = useOnScreen(ref3);
  const OnScreen4 = useOnScreen(ref4);
  const OnScreen5 = useOnScreen(ref5);
  const OnScreen6 = useOnScreen(ref6);
  const OnScreen7 = useOnScreen(ref7);
  const OnScreen8 = useOnScreen(ref8);
  const OnScreen9 = useOnScreen(ref9);

  const getImage = () => {
    if (OnScreen9) return "/png/logos/p04.png";
    if (OnScreen8) return "/png/logos/p03.png";
    if (OnScreen7) return "/png/logos/p02.png";

    return "/png/logos/p01.png";
  };
  const [sectionOne, setSectionOne] = useState(section1);

  function changeImageSectionOne(e) {
    setSectionOne((prevState) => {
      prevState.cards[e].imagen = prevState.cards[e].imagen2;
      return {
        ...prevState,
      };
    });
  }
  return (
    <Layout>
      <HeroClm />
      <FintechClm />
      <div
        className={`${style.cont_imagen} ${
          OnScreen6 ? animaciones.fadeOut : animaciones.fadeIn
        }`}
      >
        <ImagenInteractiva
          imagenSrc={getImage()}
          estilo={` ${OnScreen1 ? `${style.p_fixed} ` : ""}`}
        />
      </div>
      <section className="margin_section">
        <ImagenInteractiva
          imagenSrc={`/png/logos/p01.png`}
          estilo={style.logo_movil}
        />
        <div className="prueba1"></div>
        <SectionCustom
          numero={section1.numero}
          titulo={section1.titulo}
          parrafo1={section1.parrafo1}
          textoVerde={section1.textoVerde}
          parrafo2={section1.parrafo2}
          imagen={section1.imagen}
          estadoImagen={section1.estadoImagen}
          posicion={style.custom_imagen}
          opacidades={`margen_custom2 ${OnScreen3 ? animaciones.fadeOut3 : ""}`}
          cards={
            <>
              {sectionOne.cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    texto={card.texto}
                    textoBold={card.textoBlanco}
                    texto2={card.texto2}
                    totalCards={style.cards_4}
                    fondo={style.fondo_card_clm}
                    custom_parrafo={style.parrafo_custom}
                    myClick={(e) => {
                      e.preventDefault();
                      changeImageSectionOne(index);
                    }}
                  >
                    <CardImagen key={index} imagen={card.imagen} />
                  </Card>
                );
              })}
            </>
          }
        />
        <ImagenInteractiva
          imagenSrc={`/png/logos/p02.png`}
          estilo={style.logo_movil}
        />
        <div className="prueba"></div>
        <div ref={ref1}>
          <div className="pruebanew" ref={ref7}></div>
          <div ref={ref3}>
            <SectionCustom
              numero={section2.numero}
              titulo={section2.titulo}
              imagen={section2.imagen}
              opacidades={OnScreen4 ? animaciones.fadeOut3 : animaciones.fadeIn}
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
          </div>

          <div className="prueba"></div>
          <ImagenInteractiva
            imagenSrc={`/png/logos/p03.png`}
            estilo={style.logo_movil}
          />
          <div ref={ref4}>
            <div className="pruebanew" ref={ref8}></div>
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
              opacidades={OnScreen5 ? animaciones.fadeOut3 : animaciones.fadeIn}
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
            />
          </div>

          <div className="prueba"></div>
          <ImagenInteractiva
            imagenSrc={`/png/logos/p04.png`}
            estilo={style.logo_movil}
          />
          <div ref={ref5}>
            <div className="pruebanew" ref={ref9}>
              {" "}
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
              opacidades={`margen_custom ${
                OnScreen6 ? animaciones.fadeOut3 : animaciones.fadeIn
              }`}
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
            />{" "}
          </div>
        </div>
      </section>{" "}
      {/* <div ref={ref2} className="prueba"></div> */}
      <RealTImeClm referencia={<div className="pruebaa" ref={ref6}></div>} />
      <Footer />
    </Layout>
  );
}
