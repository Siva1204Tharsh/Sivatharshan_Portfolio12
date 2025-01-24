import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <h1 className="footer__title">Siva</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              | About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact |
            </a>
          </li>
        </ul>
        <div className="div footer__social">
          <a
            href="https://github.com/Siva1204Tharsh"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sivatharshan12/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://www.kaggle.com/sivatharshan12"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-kickstarter"></i>{" "}
          </a>
        </div>
        <span className="footer__copy">
          © 2024/25 All rights reserved | Developed by Siva
        </span>
      </div>
    </footer>
  );
};

export default Footer;
