import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Utilizamos cookies para melhorar nossa comunicação e a sua experiência
          no site. Ao continuar navegando, você concorda com a nossa{" "}
          <a href="#politica-de-privacidade">Política de Privacidade</a>.
        </p>
        <button className="agreeButton">Concordo</button>
      </footer>
    );
  }
}

export default Footer;
