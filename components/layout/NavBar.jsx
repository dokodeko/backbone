import React from "react";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Boton from "../ui/Boton";
import styleUi from "../ui/ui.module.css";
import styleLayout from "./layout.module.css";

const Header = () => {
  const router = useRouter();
  const ruta = router.pathname.slice(1);

  const fondoBoton = () => {
    if (ruta === "bolean-app") return styleLayout.boton_fondo_bolean;
    if(ruta==="clm") return styleLayout.boton_fondo_clm
    return styleLayout.boton_fondo_index;
  };
  return (
    <Navbar bg="transparent" className={`contenedor ${styleLayout.nav_custom}`}>
      <Link href="/" passHref>
        <Navbar.Brand>
          <img src="/png/logo.png" className={styleLayout.logo} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/clm" passHref>
            <Nav.Link className={`${ruta === "clm" ? styleUi.fuente : ""} ${styleLayout.links}`}>CLM</Nav.Link>
          </Link>
          <Link href="/bolean-app" passHref>
            <Nav.Link className={`${ruta === "bolean-app" ? styleUi.fuente : "" } ${styleLayout.links}`}>
              Boolean APA
            </Nav.Link>
          </Link>

          <Boton
            enlace="/#contacto"
            texto="Request a demo"
            color={fondoBoton()}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
