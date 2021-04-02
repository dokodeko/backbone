import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Boton from "../ui/Boton";
import style from "../ui/boton.module.css";

const customLink = {
  color: "#fff",
};

const Header = () => {
  return (
    <Navbar bg="transparent" className="navegacion">
      <Link href="/" passHref>
        <Navbar.Brand>Back Bone Systems</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/" passHref>
            <Nav.Link style={customLink}>CLM</Nav.Link>
          </Link>
          <Link href="/prueba" passHref>
            <Nav.Link style={customLink} className={style.fuente}>
              Link
            </Nav.Link>
          </Link>
          <Boton texto="Request a demo" color={style.background_trasparent} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
