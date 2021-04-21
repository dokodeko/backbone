import Layout from "../components/layout/Layout";
import HeroIndex from "../components/paginas/index/HeroIndex";
import TruestedIndex from "../components/paginas/index/TruestedIndex";

export default function Home() {
  return (
    <Layout>
      <HeroIndex />
      <TruestedIndex />
    </Layout>
  );
}
