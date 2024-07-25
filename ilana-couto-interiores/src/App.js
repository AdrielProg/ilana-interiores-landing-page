import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
        <ChatButton />
      </div>
    );
  }
}

export default App;
