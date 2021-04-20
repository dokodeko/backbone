import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/index/HeroIndex";
import AnalyticsIndex from "../components/paginas/index/AnalyticsIndex";
import EngineIndex from "../components/paginas/index/EngineIndex";
import ServicesIndex from "../components/paginas/index/ServicesIndex";
import style from "../components/layout/layout.module.css";
export default function BoleanApp() {
  return (
    <Layout>
      <HeroIndex />
      <div className={style.fondo_2}>
        <AnalyticsIndex />
        <EngineIndex />
      </div>
      <ServicesIndex />
    </Layout>
  );
}
