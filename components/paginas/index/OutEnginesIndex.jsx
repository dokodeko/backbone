import style from "./index.module.css";

const OutEnginesIndex = () => {
  return (
    <div className={`${style.cont_engines_index}`}>
      <h3 className="colorBlanco titulo">
        OUR <span className="colorAzul2">ENGINES</span>
      </h3>
      <div className={`flex_box ${style.texto_engines_index}`}>
        <div className={style.cont_engines_1}>
          <h4>
            CLIENT
            <span>
              {" "}
              LIFECYCLE <br />
            </span>
            MANAGEMENT
          </h4>
          <p>
            Streamline your financial institution's{" "}
            <span>
              {" "}
              Client Lifecycle <br /> Management{" "}
            </span>
            operations.
          </p>
          <div className={`flex_box ${style.parrafos_engines_index}`}>
            <p>Identity Management</p>
            <p>Onboarding</p>
            <p>Financial crime detection</p>
            <p>Compliance</p>
          </div>
        </div>
        <div className={style.cont_engines_1}>
          <img
            src="/png/index/engines1.png"
            alt=""
            className={style.engines_img1}
          />
        </div>
      </div>
      <div className={`flex_box ${style.texto_engines_index}`}>
        <div className={style.cont_engines_2}>
          <img
            src="/png/index/engines2.png"
            alt=""
            className={style.engines_img2}
          />
        </div>
        <div className={style.cont_engines_2}>
          <h4>
            ANALYTIC PROCESS <br />
            <span> AUTOMATION</span>
          </h4>
          <p>
            Centralize your data, perform automation, exploration and
            decisioning, and execute real-life actions.{" "}
          </p>
          <div className={`flex_box ${style.parrafos_engines_index}`}>
            <p>Data integration</p>
            <p>No code process automation</p>
            <p>Data visualization</p>
            <p>Decision orchestration</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OutEnginesIndex;
