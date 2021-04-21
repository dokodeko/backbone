import Card from "../../ui/Card/Card";
import CardImagen from "../../ui/Card/CardImagen";
import style from "./index.module.css";
const cards = [
  {
    id: 1,
    imagen: "/png/index/icard1.png",
    texto: "EMPOWER",
    texto2: "YOUR DATA",
    flecha: true,
  },
  {
    id: 1,
    imagen: "/png/index/icard2.png",
    texto: "AUTOMATE",
    texto2: "YOUR PROCESSES",
    flecha: true,
  },
  {
    id: 1,
    imagen: "/png/index/icard3.png",
    texto: "UPSKILL",
    texto2: "YOUR TEAM",
  },
];
const TruestedIndex = () => {
  return (
    <div className={`flex_box ${style.contenedor_cards_index}`}>
      {cards.map((item, index) => {
        return (
          <Card
            key={index}
            totalCards={style.card_3}
            fondo={style.fondo_card}
            texto={item.texto}
            textoBold={item.texto2}
            salto={true}
            custom_parrafo={style.parrafo_cards_index}
            flecha={item.flecha}
          >
            <CardImagen tamano={true} key={index} imagen={item.imagen} />
          </Card>
        );
      })}
    </div>
  );
};
export default TruestedIndex;
