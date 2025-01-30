import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className=" section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web Development</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__close"
              ></i>
              <h3 className="services__modal-title">Full Stack Development</h3>
              <p className="services__modal-description">
                I build scalable, secure, and responsive full-stack applications
                with modern technologies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Frontend & Backend Development -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Scalable & Secure Architectures -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API Development & Integration -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Database Design & Optimization -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Responsive & Mobile-Friendly UI -✅
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-chart-line services__icon"></i>
            <h3 className="services__title">Data Science</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__close"
              ></i>
              <h3 className="services__modal-title">ML Engineer</h3>
              <p className="services__modal-description">
                I analyze complex data to extract insights, build predictive
                models, and drive data-driven decisions.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data Cleaning & Preprocessing -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Exploratory Data Analysis (EDA) -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Machine Learning & Predictive Modeling -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Statistical Analysis & Visualization -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data-Driven Decision Making -✅
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-robot services__icon"></i>
            <h3 className="services__title">AI Solution</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__close"
              ></i>
              <h3 className="services__modal-title">AI Developer</h3>
              <p className="services__modal-description">
                I develop custom AI models, including NLP, computer vision, and
                automation solutions.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom AI Model Development -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Deep Learning & Neural Networks -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Natural Language Processing (NLP) -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    Computer Vision & Image Processing -✅
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    AI-Powered Automation -✅
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
