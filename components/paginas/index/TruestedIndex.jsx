import Card from "../../ui/Card/Card";
import CardImagen from "../../ui/Card/CardImagen";
import style from "./index.module.css";
const cards = [
  {
    id: 1,
    imagen: "/png/index/icard1.png",
    texto: "EMPOWER",
    texto2: "YOUR DATA",
    
  },
  {
    id: 1,
    imagen: "/png/index/icard2.png",
    texto: "AUTOMATE",
    texto2: "YOUR PROCESSES",
    
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
    <>
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
      <div className={`${style.texto_truested_index}`}>
        <h2 className="colorAzul2 titulo">
          TRUSTED
          <span className="colorBlanco">
            {" "}
            BY INDUSTRY
            <br /> LEADERS
          </span>
        </h2>
        <p className="colorBlanco">
          Our onboarding, financial crime detection and compliance solutions are
          already making making it possible for our clients to handle millions
          of users, and we're always working on building new innovative tools
          for our clients.{" "}
        </p>
        <div className={`flex_box ${style.cont_img_truested}`}>
          <div>
            {" "}
            <img src="/png/index/rappi.png" />
          </div>
          <div>
            {" "}
            <img src="/png/index/oxxo.png" />
          </div>
          <div>
            {" "}
            <img src="/png/index/inter.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TruestedIndex;
