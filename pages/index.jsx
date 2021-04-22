import Layout from "../components/layout/Layout";
import CardsIndex from "../components/paginas/index/CardsIndex";
import ContactoIndex from "../components/paginas/index/ContactoIndex";
import HeroIndex from "../components/paginas/index/HeroIndex";
import OutEnginesIndex from "../components/paginas/index/OutEnginesIndex";
import TruestedIndex from "../components/paginas/index/TruestedIndex";

export default function Home() {
  return (
    <Layout>
      <HeroIndex />
      <TruestedIndex />
      <OutEnginesIndex />
      <CardsIndex />
      <ContactoIndex />
    </Layout>
  );
}
