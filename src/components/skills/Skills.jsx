import React from "react";
import "./skills.css";
import DataScience from "./DataScience";
import ArtificialIntelligence from "./ArtificialIntelligence";
import CircleData from "./CircleData";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className=" section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <DataScience />
        <ArtificialIntelligence />
        <CircleData />
      </div>
    </section>
  );
};

export default Skills;
