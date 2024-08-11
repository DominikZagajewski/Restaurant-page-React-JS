import React from "react";

const Footer = () => {
  return (
    <section className="footer-content">
      <div className="footer-logo">
        <img src="https://picsum.photos/100/100" alt="logo restauracji" />
      </div>
      <div className="footer-adress">
        <p>
          221B Baker St, Marylebone, London NW1 6XE, UK
          <br />
          Phone: +44 111 222 1234 <br />
          E-mail: restaurant@fake.com
        </p>
      </div>
      <div className="footer-media">
        <p>Follow us on:</p>
      </div>

      <div className="footer-info">
        <hr />
        <p></p>
        <nav>
          <ul>
            <li>
              <a href="#">Regulamin </a>
            </li>
            <li>
              <a href="#">Polityka prywatności </a>
            </li>
            <li>
              <a href="#">Ustawienia ciasteczek </a>
            </li>
            <li>
              <a href="#">Zgody marketingowe </a>
            </li>
            <li>
              <a href="#">Panel administratora </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
