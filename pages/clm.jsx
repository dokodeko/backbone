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
  const [sectionThree, setSectionThree] = useState(section3);
  const [sectionFour, setSectionFour] = useState(section4);
  
  function changeImageSectionThree(e){
    setSectionThree((prevState) => {
      prevState.imagen = prevState.cards[e].imagen2;
      sectionThree.cards[0].activo=true
          
      for(var i =0; i < prevState.cards.length;i++ ){
        if(prevState.cards[i] != prevState.cards[e]){
          prevState.cards[i].activo = false
          console.log(prevState.cards[i].activo)
        }else{
          prevState.cards[i].activo = true
          console.log(prevState.cards[i].activo)
        }
      }
      return {
        ...prevState
      };
    });
  }
  function changeImageSectionFour(e){
    setSectionFour((prevState) => {
      prevState.imagen = prevState.cards[e].imagen2;
      
      
      for(var i =0; i < prevState.cards.length;i++ ){
        if(prevState.cards[i] != prevState.cards[e]){
          prevState.cards[i].activo = false
          console.log(prevState.cards[i].activo)
        }else{
          prevState.cards[i].activo = true
          console.log(prevState.cards[i].activo)
        }
      }
      return {
        ...prevState
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
          numero={sectionOne.numero}
          titulo={sectionOne.titulo}
          parrafo1={sectionOne.parrafo1}
          textoVerde={sectionOne.textoVerde}
          parrafo2={sectionOne.parrafo2}
          imagen={sectionOne.imagen}
          estadoImagen={sectionOne.estadoImagen}
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
                    activo={card.activo}
                    
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
          <div className="pruebanew" ref={ref7}>
            <div ref={ref3}></div>
          </div>
          <div >
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
          <div >
            <div className="pruebanew" ref={ref8}>
              <div ref={ref4}></div>
            </div>
            <SectionCustom
              numero={sectionThree.numero}
              titulo={sectionThree.titulo}
              parrafo1={sectionThree.parrafo1}
              textoVerde={sectionThree.textoVerde}
              parrafo2={sectionThree.parrafo2}
              textoVerde2={sectionThree.textoVerde2}
              parrafo3={sectionThree.parrafo3}
              imagen={sectionThree.imagen}
              estadoImagen={sectionThree.estadoImagen}
              posicion={style.custom_imagen}
              opacidades={OnScreen5 ? animaciones.fadeOut3 : animaciones.fadeIn}
              cards={
                <>
                  {sectionThree.cards.map((card, index) => {
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
                        activo={card.activo}
                        myClick={(e) => {
                          e.preventDefault();
                          changeImageSectionThree(index);
                        }}
                      >
                        <CardImagen key={index} imagen={card.imagen} />
                      </Card>
                    );
                  })}
                </>
              }
            />
          </div>
          <div className="espacio3-4"></div>
          <div className="prueba"></div>
          <ImagenInteractiva
            imagenSrc={`/png/logos/p04.png`}
            estilo={style.logo_movil}
          />
          <div >
            <div className="pruebanew1" ref={ref9}>
              <div ref={ref5}></div>
            </div>
            <SectionCustom
              numero={sectionFour.numero}
              titulo={sectionFour.titulo}
              parrafo1={sectionFour.parrafo1}
              textoVerde={sectionFour.textoVerde}
              parrafo2={sectionFour.parrafo2}
              imagen={sectionFour.imagen}
              estadoImagen={sectionFour.estadoImagen}
              posicion={style.custom_imagen}
              opacidades={`margen_custom ${
                OnScreen6 ? animaciones.fadeOut3 : animaciones.fadeIn
              }`}
              cards={
                <>
                  {sectionFour.cards.map((card, index) => {
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
                        activo={card.activo}
                    
                        myClick={(e) => {
                          e.preventDefault();
                          changeImageSectionFour(index);
                        }}
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
