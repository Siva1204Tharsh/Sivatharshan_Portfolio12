import React from "react";

const ArtificialIntelligence = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Artificial Intelligence</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Computer Vision</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">NLP</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Time Series Analysis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Machine Learning</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Deep Learning</h3>
              <span className="skills__level">Adavanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">GPT</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
