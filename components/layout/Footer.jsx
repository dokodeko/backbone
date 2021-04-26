import styleLayout from "./layout.module.css";
import fondos from "../../styles/fondos.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const cambioFondo = () => {
    let ruta = router.pathname.slice(1);
    if (ruta === "clm") return fondos.footer_clm;
    if (ruta === "bolean-app") return fondos.footer_app;
    return;
  };
  return (
    <footer className={`${styleLayout.footer} ${cambioFondo()}`}>
      <div className={styleLayout.cont_logo}>
        <img src="/png/b.png" />
      </div>
      <div className={styleLayout.cont_texto}>
        <a href="mailto:info@backbonesystems.io">info@backbonesystems.io</a>
        <p className="mb-0 ">© 2021 Backbone Systems. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
