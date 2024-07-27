import React, { Component } from "react";
import Header from "./components/Header";
import AppHero from "./components/Hero";
import AppFooter from "./components/Footer";
import Home from "./components/Home";
import LogoPage from "./components/LogoPage";
import AboutMe from "./components/AboutMe";
import AppClientForm from "./components/ClientForm";
// import Footer from "./components/Footer";
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
        <main>
          <AppHero id="hero-app" />
          <Home />
          <LogoPage />
          <AboutMe />
          <form id="form">
            <AppClientForm />
          </form>
        </main>
        <footer id="footer">
          <AppFooter />
        </footer>
        <ChatButton />
      </div>
    );
  }
}

export default App;
