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
            <h3 className="services__title">Data Analysis</h3>
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
              <h3 className="services__modal-title">Data Analyst</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">AI can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">ML Development</h3>
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
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">AI can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">AI Development</h3>
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
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">AI can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I can do this</p>
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
