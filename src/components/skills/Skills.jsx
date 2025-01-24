import React from "react";
import "./skills.css";
import DataScience from "./DataScience";
import ArtificialIntelligence from "./ArtificialIntelligence";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className=" section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <DataScience />
        <ArtificialIntelligence />
      </div>
    </section>
  );
};

export default Skills;
