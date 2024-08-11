import { useState } from "react";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
