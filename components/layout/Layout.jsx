import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Head from "next/head";
import fondos from "../../styles/fondos.module.css";
import style from "./layout.module.css";

const Layout = (props) => {
  const router = useRouter();
  const ruta = router.pathname.slice(1);

  const cambioFondo = () => {
    if (ruta === "clm") return fondos.layout_clm;
    if (ruta === "bolean-app") return fondos.layout_app;

    return;
  };
  const cambioFondo2 = () => {
    if (ruta === "clm") return fondos.middle_clm;
    if (ruta === "bolean-app") return fondos.middle_app;
    return;
  };
  return (
    <>
      <Head>
        <title>BACK BONE SYSTEMS</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`${style.fondo_pagina} ${cambioFondo()}`}>
        <NavBar />

        <main className={cambioFondo2()}>{props.children}</main>
      </div>
    </>
  );
};
export default Layout;
