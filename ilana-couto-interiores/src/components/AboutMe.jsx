// src/components/AboutMe.js

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/aboutMe.css";
import profilePic from "../images/perfil.jpg"; // substitua pelo caminho da sua imagem

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5">
      <Container className="container-about-me">
        <Row className="align-items-center">
          <Col md={4} className="about-me-col">
            <Image src={profilePic} roundedCircle fluid className="w-75" />
          </Col>
          <Col md={7}>
            <h2>Sobre Mim</h2>
            <p>
              Ilana, designer de interiores, estou a 27 anos na terra e há um
              bom tempo delcarei publicamente minha paixão por transformar
              espaços sem vida em ambientes aconchegantes, aqueles que fazem
              você querer aproveitar mais cinco minutinhos no lugar, sabe? Já é
              comprovado que um bom projeto começa com uma boa conversa,
              portanto, através de um briefing detalhado, entenderei seus
              desejos, sonhos e necessidades, resultando em um projeto cheio de
              personalização, exclusividade, e, o principal, histórias pra
              contar.
            </p>
            <p>
              Resido em João Pessoa/PB e também atendo online. Entre em contato
              para dar início a criação do seu espaço residencial!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
