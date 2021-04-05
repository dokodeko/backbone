import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/HeroIndex";
import AnalyticsIndex from "../components/paginas/AnalyticsIndex";

export default function Home() {
  return (
    <Layout>
      <HeroIndex />
      <AnalyticsIndex />
    </Layout>
  );
}
