import Layout from "../components/layout/Layout";
import HeroBolean from "../components/paginas/bolean/HeroBolean";
import AnalyticsBolean from "../components/paginas/bolean/AnalyticsBolean";
import EngineBolean from "../components/paginas/bolean/EngineBolean";
import ServicesBolean from "../components/paginas/bolean/ServicesBolean";
import style from "../components/layout/layout.module.css";
export default function BoleanApp() {
  return (
    <Layout>
      <HeroBolean />
      <div className={style.fondo_2}>
        <AnalyticsBolean />
        <EngineBolean />
      </div>
      <ServicesBolean />
    </Layout>
  );
}
