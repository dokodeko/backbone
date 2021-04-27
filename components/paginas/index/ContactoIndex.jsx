import Boton from "../../ui/Boton";
import style from "./index.module.css";
import styleLayout from "../../layout/layout.module.css";

const ContactoIndex = (props) => {
  return (
    <div className={`contenedor ${style.cont_contac} `} id="contacto">
      <h4 className="colorBlanco titulo">
        <span className="colorAzul2"> LEAVE IT TO THE EXPERTS &</span> <br />{" "}
        AUTOMATE YOUR COMPLIANCE <br /> OPERATIONS TODAY
      </h4>
      <form className="mt-5">
        <fieldset className={`flex_box ${style.cont_contac_fielset}`}>
          <input
            type="text"
            placeholder="Full name"
            className={style.fondo_card}
          />
          <input type="mail" placeholder="e-mail**" />
          <textarea placeholder="Type your message here"></textarea>
          <Boton enlace="/" texto="Send" color={style.boton_contact} />
          {props.children}
        </fieldset>
      </form>
    </div>
  );
};
export default ContactoIndex;
