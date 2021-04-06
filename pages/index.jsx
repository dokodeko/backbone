import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/HeroIndex";
import AnalyticsIndex from "../components/paginas/AnalyticsIndex";
import EngineIndex from "../components/paginas/EngineIndex";
import ServicesIndex from "../components/paginas/ServicesIndex";
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
