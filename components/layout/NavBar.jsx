import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Boton from "../ui/Boton";
import styleUi from "../ui/ui.module.css";
import styleLayout from "./layout.module.css";

const customLink = {
  color: "#fff",
  marginRight: "1rem",
};

const Header = () => {
  return (
    <Navbar bg="transparent" className={`contenedor ${styleLayout.nav_custom}`}>
      <Navbar.Brand>
        <img src="/png/logo.png" className={styleLayout.logo} alt="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/clm" passHref>
            <Nav.Link style={customLink}>CLM</Nav.Link>
          </Link>
          <Link href="/prueba" passHref>
            <Nav.Link style={customLink} className={styleUi.fuente}>
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
