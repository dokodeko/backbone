import style from "./clm.module.css";

const FintechClm = () => {
  return (
    <div className="contenedor flex_box my-5">
      <div className={style.imagen_fintech}>
        <div id={style.Onboarding}>Onboarding</div>
        <div id={style.Compliance}>Compliance</div>
        <div id={style.Monitoring}>Monitoring</div>
      </div>
      <div className={style.texto_fintech}>
        <h3>
          A <span>FULLY INTEGRATED SUITE </span>OF FINTECH TOOLS
        </h3>
        <p className="colorBlanco">
          Backbone System's Client Lifecycle Management suite of API and SaaS
          Solutions provide the necessary tools to streamline end-to-end client
          journeys. We give financial institutions the tools they need to
          deliver the best experience to their customers without the need for
          extensive teams and internal efforts.
        </p>
      </div>
    </div>
  );
};
export default FintechClm;
