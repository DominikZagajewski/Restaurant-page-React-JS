import { useState } from "react";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
