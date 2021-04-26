import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Boton from "../ui/Boton";
import styleUi from "../ui/ui.module.css";
import styleLayout from "./layout.module.css";

const Header = () => {
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
            <Nav.Link className={`${styleLayout.links}`}>CLM</Nav.Link>
          </Link>
          <Link href="/bolean-app" passHref>
            <Nav.Link className={`${styleUi.fuente} ${styleLayout.links}`}>
              Boolean APA
            </Nav.Link>
          </Link>
          <Boton texto="Request a demo" color={styleUi.background_trasparent} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
