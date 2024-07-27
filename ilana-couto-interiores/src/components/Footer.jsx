import React, { Component } from "react";
import "../styles/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from "react-bootstrap/Container";

class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="copyright">
          &copy; 2024 Ilana Couto Interiores. Todos os direitos reservados
        </div>
        <div className="socials">
          <ul className="icons-socials">
            <li>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Footer;
