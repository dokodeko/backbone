import Card from "../../ui/Card/Card";
import style from "./index.module.css";

const cards = [
  {
    titulo: "SIMPLE YET POWERFUL ",
    subtitulo: "DEVELOPER TOOLS",
    texto:
      "We're fully committed to making life easier for developers so they don't have to spend months figuring out specific subject nuances. We provide them with clear documentation, SDKs, and testing environments, while configurations are done directly on the GUI by your subject expert team with our help.",
  },
  {
    titulo: "ENTERPRISE GRADE ",
    subtitulo: "SERVICE",
    salto: true,
    texto:
      "Our systems operate with 99.9%+ uptime and are highly scalable and redundant We're compliant financial-grade security standards. Furthermore, we provide dedicated support. ",
  },
  {
    titulo: "FULLY MANAGED",
    subtitulo: "AND CLOUD NATIVE",
    texto:
      "Don't worry about scalability, security, or maintainability issues. We'll handle everything and keep the systems running optimally. ",
  },
  {
    titulo: "CONTINUED",
    subtitulo: "INNOVATION",

    texto:
      "Backbone releases software enhancements on a bi-weekly basis. We are always analyzing client feedback, regulatory changes and new technologies to improve our product.",
  },
];

const CardsIndex = () => {
  return (
    <div className={`contenedor ${style.cont_card_index}`}>
      <h3>
        A <span> technology-first approach to</span> <br /> enterprise
        operations
      </h3>
      <div className={`flex_box ${style.cards_index}`}>
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              texto={item.texto}
              totalCards={style.card_4}
              fondo={style.fondo_card}
            >
              <h5
                className={`${style.titulo_cards_index} ${
                  item.salto ? style.titulo2_cards_index : ""
                }`}
              >
                {item.titulo}
                {item.salto ? "" : <br />}
                <span>{item.subtitulo}</span>
              </h5>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardsIndex;
