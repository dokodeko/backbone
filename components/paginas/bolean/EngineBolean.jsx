import style from "./bolean.module.css";
import CardTituloVerde from "../../ui/Card/CardTituloVerde";

const EngineBolean = () => {
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
        <div className={style.cont_imagen}>
          <img src="/png/middleng.png" />
        </div>
       
      </div>
    </section>
  );
};
export default EngineBolean;
