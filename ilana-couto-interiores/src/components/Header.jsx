import React from "react";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
// Importante!
import "../styles/header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="header fixed-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#inicio">
          <Image src={logo} alt="logo Ilana Couto Interiores" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="text-uppercase fw-bold mx-2">
              início
            </Nav.Link>
            <Nav.Link href="#sobre-nos" className="text-uppercase fw-bold mx-2">
              sobre nós
            </Nav.Link>
            <Nav.Link href="#projetos" className="text-uppercase fw-bold mx-2">
              projetos
            </Nav.Link>
            <Nav.Link href="#portfolio" className="text-uppercase fw-bold mx-2">
              portfólio
            </Nav.Link>
            <Nav.Link href="#contato" className="text-uppercase fw-bold mx-2">
              contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
