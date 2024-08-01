// src/components/AboutMe.js

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/aboutMe.css";
import profilePic from "../images/perfil.jpg"; // substitua pelo caminho da sua imagem

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5">
      <Container fluid className="bg-light d-flex justify-content-center">
        <Row className="align-items-center">
          <Col xs={5} className="about-me-col">
            <Image src={profilePic} fluid roundedCircle />
          </Col>
          <Col xs={7} className="align-self-center d-flex flex-column">
            <h2 className="my-4 align-self-center">Sobre Mim</h2>
            <p clasName="px-5">
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
