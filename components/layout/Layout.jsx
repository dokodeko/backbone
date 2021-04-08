import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

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
        <NavBar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
