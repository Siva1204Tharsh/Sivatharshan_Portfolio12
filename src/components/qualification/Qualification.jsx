import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container ">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">G.C.E. (A/L)</h3>
                <span className="qualification__subtitle">
                  J/MHC -School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BSc(CST)</h3>
                <span className="qualification__subtitle">UWU -University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">AI & Data Science</h3>
                <span className="qualification__subtitle">NoviTech R&D</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Nov2024-Apr2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Data Science</h3>
                <span className="qualification__subtitle">Uwa -Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2025 - Present
                </div>
              </div>
            </div> */}
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trainee</h3>
                <span className="qualification__subtitle">Manipay-BOC</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">AI/ML Engineer Intern</h3>
                <span className="qualification__subtitle">FAITE</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Currently
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Science Intern</h3>
                <span className="qualification__subtitle">NoviTech</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ABC</h3>
                <span className="qualification__subtitle">abc</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>------
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
