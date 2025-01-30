import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.github} className="work__button">
        {item.date} <i className="bx bxl-github work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
