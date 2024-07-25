import React, { Component } from "react";
import "../styles/mainContent.css";

class MainContent extends Component {
  render() {
    return (
      <main className="mainContent">
        <div className="images">
          <img src="image1.jpg" alt="Sala" className="image" />
          <img src="image2.jpg" alt="Cozinha" className="image" />
        </div>
        <div className="text"></div>
      </main>
    );
  }
}

export default MainContent;
