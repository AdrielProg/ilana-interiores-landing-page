// src/components/CarouselComponent.js
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "../styles/carousel.css"; // Importa o CSS personalizado
import sala from "../images/sala.jpg";
import quarto from "../images/quarto.jpg";
import banheiro from "../images/banheiro.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel>
          <Carousel.Item>
            <img className="d-block" src={sala} alt="Primeiro Projeto" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block" src={quarto} alt="Segundo Projeto" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block" src={banheiro} alt="Terceiro Projeto" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
