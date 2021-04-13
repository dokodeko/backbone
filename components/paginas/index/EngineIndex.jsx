import style from "./index.module.css";
import CardTituloVerde from "../../ui/Card/CardTituloVerde";

const EngineIndex = () => {
  return (
    <section className={`contenedor ${style.contenedor_engine} `}>
      <CardTituloVerde
        texto1="OUR"
        texto2="APA ENGINE"
        salto={false}
        tamanoFuente="titulo_tamano"
        posicion={style.texto_centro}
      />
      <p className={`mb-0 colorBlanco text-center`}>
        Centralize your data, perform automation, exploration and decisioning,
        and <br /> execute real-life actions.
      </p>
      <div className={`flex_box ${style.contendor_lista}`}>
        <div className={style.lista1}>
          <ul>
            <li>Esternal APIs</li>
            <li>Raw documents</li>
            <li>Databases</li>
            <li>Clients</li>
            <li>Employees</li>
          </ul>
        </div>
        <div className={style.cont_imagen}>
          <img src="/png/engine_middle.png" />
        </div>
        <div className={style.lista2}>
          <ul>
            <li>Customizable APIs</li>
            <li>Communications</li>
            <li>Business-ready documents</li>
            <li>Software inputs</li>
            <li>Dashboards</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default EngineIndex;
