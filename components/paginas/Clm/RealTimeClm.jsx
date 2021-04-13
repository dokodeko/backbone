import style from "./clm.module.css";

const RealTImeClm = () => {
  return (
    <div className={`contenedor flex_box ${style.contenedor_real}`}>
      <div className={`${style.contclm_izquierda}`}>
        <h3 className="colorBlanco titulo titulos_tamano">
          REAL TIME <span className="colorAzul">SERVICES</span>
        </h3>
        <p className="colorBlanco mt-4">
          Embed reliable real time verification services into your onboarding
          flows without having to stitch together multiple vendors or sticking
          to one-size-fits-all KYC solutions.
        </p>
        <p className="colorBlanco">
          Backbone offers atomic APIs that use in-house technology and native
          integrations with the leading providers to address the main data point
          checks that mexican fintechs need.
        </p>
      </div>
      <div className={`${style.contclm_derecha}`}>
        <h5 className={`colorBlanco titulo ${style.titulo_clm}`}>
          <span className="colorAzul "> 99% </span> UPTIME
        </h5>
        <h5 className={`colorBlanco titulo ${style.titulo_clm}`}>
          <span className="colorAzul "> 2,000+ </span> CURRENCY
        </h5>{" "}
        <h5 className={`colorBlanco titulo ${style.titulo_clm}`}>
          <span className="colorAzul "> TOP MARKET </span> RESPONSE TIMES
        </h5>
        <div className={`flex_box ${style.contclm_imagenes}`}>
          <p className={style.real_imagenes}>
            <img src="/png/real/base.png" alt="" />
            Sanction Screening
          </p>
          <p className={style.real_imagenes}>
            <img src="/png/real/ine.png" alt="" />
            INE data extraction
          </p>
          <p className={style.real_imagenes}>
            <img src="/png/real/curp.png" alt="" />
            CURP lookup
          </p>
          <p className={style.real_imagenes}>
            <img src="/png/real/face.png" alt="" />
            Facematch
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealTImeClm;
