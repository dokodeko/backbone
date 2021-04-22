import { useRef } from "react";
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

import { section1, section2, section3, section4 } from "./constants/clm";

export default function Clm() {
  const ref2 = new useRef();
  const ref3 = new useRef();
  const ref4 = new useRef();
  const ref5 = new useRef();
  const ref6 = new useRef();

  const OnScreen = useOnScreen(ref2);

  const OnScreen2 = useOnScreen(ref3);
  const OnScreen3 = useOnScreen(ref4);
  const OnScreen5 = useOnScreen(ref5);
  const onSCreen6 = useOnScreen(ref6);

  const getImage = () => {
    if (OnScreen3) return "/png/logos/p04.png";
    if (OnScreen2) return "/png/logos/p03.png";
    if (OnScreen) return "/png/logos/p02.png";

    return "/png/logos/p01.png";
  };
  const opacityOff = () => {
    if (OnScreen) return style.opacityoff;
    if (OnScreen2) return style.opacityoff;
    return;
  };
  return (
    <div>
      <Layout>
        <HeroClm />
        <FintechClm />
        <section>
          <div
            className={
              OnScreen5 ? ` ${animaciones.fadeOut}` : animaciones.fadeIn
            }
          >
            <ImagenInteractiva
              imagenSrc={getImage()}
              estilo={
                OnScreen
                  ? `${style.p_fixed} ${animaciones.fadeIn}`
                  : `${style.transicion}`
              }
            />
          </div>

          <SectionCustom
            numero={section1.numero}
            titulo={section1.titulo}
            parrafo1={section1.parrafo1}
            textoVerde={section1.textoVerde}
            parrafo2={section1.parrafo2}
            imagen={section1.imagen}
            estadoImagen={section1.estadoImagen}
            posicion={style.custom_imagen}
            opacidades={OnScreen2 ? animaciones.fadeOut : ""}
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
            <ImagenInteractiva
              imagenSrc={getImage()}
              estilo={style.logo_movil}
            />
            <SectionCustom
              numero={section2.numero}
              titulo={section2.titulo}
              imagen={section2.imagen}
              opacidades={OnScreen3 ? animaciones.fadeOut : ""}
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
            <div ref={ref3} className={onSCreen6 ? animaciones.fadeOut : ""}>
              <ImagenInteractiva
                imagenSrc={getImage()}
                estilo={style.logo_movil}
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
              />
            </div>{" "}
            <div ref={ref4}>
              <ImagenInteractiva
                imagenSrc={getImage()}
                estilo={style.logo_movil}
              />
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
            </div>
          </div>
          <div ref={ref6} className="test"></div>
        </section>
        <RealTImeClm
          referencia={
            <>
              <div ref={ref5}> </div>
            </>
          }
        />
      </Layout>
    </div>
  );
}
