import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/HeroIndex";
import AnalyticsIndex from "../components/paginas/AnalyticsIndex";
import Engine from "../components/paginas/Engine";
export default function Home() {
  return (
    <Layout>
      <HeroIndex />
      <AnalyticsIndex />
      <Engine />
    </Layout>
  );
}
