import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>BACK BONE SYSTEMS</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="fondo_pagina">
        <NavBar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
