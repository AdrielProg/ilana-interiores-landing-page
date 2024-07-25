import React, { Component } from "react";
import "../styles/header.css";
import logo from "../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo Ilana Couto Interiores" />
        </div>
        <nav>
          <ul className="navList">
            <li className="navItem">
              <a href="#inicio">início</a>
            </li>
            <li className="navItem">
              <a href="#sobre-nos">sobre nós</a>
            </li>
            <li className="navItem">
              <a href="#servicos">serviços</a>
            </li>
            <li className="navItem">
              <a href="#portfolio">portfólio</a>
            </li>
            <li className="navItem">
              <a href="#publicacoes">publicações</a>
            </li>
            <li className="navItem">
              <a href="#blog">blog</a>
            </li>
            <li className="navItem">
              <a href="#contato">contato</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
