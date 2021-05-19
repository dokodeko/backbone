import style from "./index.module.css";
const HeroIndex = () => {
  return (
    <div className={`contenedor  ${style.contenedor_index_hero}`}>
      <h1 className="colorAzul2 titulo">
        SUPERCHARGE <br />
        <span className="colorBlanco">YOUR OPERATIONS</span>
      </h1>
      <p className="colorBlanco">
        We're dedicated to stopping data recaptures & mismatch, system
        isolation, and repetitive tasks
        <b><span className="colorAzul2"> in the world</span></b>
      </p>
    </div>
  );
};
export default HeroIndex;
