import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import style from "../../styles/paginas.module.css";

const Layout = (props) => {
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
      <div className="fondo_pagina">
        <div className={style.fondoHero}>
          <NavBar />
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
