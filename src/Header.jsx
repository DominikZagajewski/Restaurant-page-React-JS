import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Restauracja Zacisze</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button id="orderBtn">Order online</button>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
