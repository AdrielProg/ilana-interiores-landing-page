import React, { Component } from "react";
import "../styles/mainContent.css";
import CarouselComponent from "./CarouselComponent";
import profile from "../images/perfil.jpg";
import logo from "../images/logo2.png";

class MainContent extends Component {
  render() {
    return (
      <main className="mainContent">
        <div className="images">
          <CarouselComponent></CarouselComponent>
          <div className="description">
            <picture>
              <img className="profile" src={profile} alt="Foto-Projetista" />
            </picture>
            <div className="presentation">
              <h2 className="about-me">Ilana Couto</h2>
            </div>
          </div>
        </div>
        <div className="logo2">
          <img src={logo} alt="" />
        </div>
      </main>
    );
  }
}

export default MainContent;
