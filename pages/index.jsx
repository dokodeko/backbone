import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/index/HeroIndex";
import AnalyticsIndex from "../components/paginas/index/AnalyticsIndex";
import EngineIndex from "../components/paginas/index/EngineIndex";
import ServicesIndex from "../components/paginas/index/ServicesIndex";
export default function Home() {
  return (
    <Layout>
      <HeroIndex />
      <AnalyticsIndex />
      <EngineIndex />
      <ServicesIndex />
    </Layout>
  );
}
