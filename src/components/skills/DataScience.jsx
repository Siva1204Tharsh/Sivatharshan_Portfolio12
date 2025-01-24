import React from "react";

const DataScience = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Scientist</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Statistics & Math</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Programming</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Data Manipulation</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Data Visualization</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">BI Tools</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__icon"></i>
            <div>
              <h3 className="skills__name">Database</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
