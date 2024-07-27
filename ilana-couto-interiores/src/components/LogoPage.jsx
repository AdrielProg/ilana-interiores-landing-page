import React, { Component } from "react";
import "../styles/logoPage.css";
import logo from "../images/logo2.png";

class LogoPage extends Component {
  render() {
    return (
      <div className="logo-page">
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default LogoPage;
