import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import "../src/styles/App.css";
import "../src/styles/responsive.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <Header />
        </header>
        <MainContent />
        <Footer />
        <ChatButton />
      </div>
    );
  }
}

export default App;
