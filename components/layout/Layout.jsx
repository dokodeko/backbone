import NavBar from "./NavBar";
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
      </div>
    </>
  );
};
export default Layout;
