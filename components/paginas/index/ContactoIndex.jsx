import Boton from "../../ui/Boton";
import style from "./index.module.css";

const ContactoIndex = () => {
  return (
    <div className={`contenedor ${style.cont_contac}`}>
      <h4 className="colorBlanco titulo">
        <span className="colorAzul2"> LEAVE IT TO THE EXPERTS &</span> <br />{" "}
        AUTOMATE YOUR COMPLIANCE <br /> OPERATIONS TODAY
      </h4>
      <form>
        <fieldset>
          <input type="text" placeholder="Full name*" />
          <input type="mail" placeholder="e-mail**" />
          <textarea
            name="mensaje"
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message here"
          ></textarea>
          <Boton texto="Send" />
        </fieldset>
      </form>
    </div>
  );
};
export default ContactoIndex;
