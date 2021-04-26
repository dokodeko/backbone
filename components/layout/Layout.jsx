import { useRouter } from "next/router";
import NavBar from "./NavBar";

import Head from "next/head";
import style from "./layout.module.css";

const Layout = (props) => {
  const ruta = useRouter();
  console.log(ruta.pathname.slice(1));
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
      <div className={style.fondo_pagina}>
        <div>
          <NavBar />

          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
