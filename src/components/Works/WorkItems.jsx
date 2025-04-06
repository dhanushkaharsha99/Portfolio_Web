import React from "react";
import { useNavigate } from "react-router-dom";

const WorkItems = ({ item }) => {
  const navigate = useNavigate();   // Import useNavigate

  const navigateToDemo = (category) => {
    navigate(`/demo/${category}`); // Navigate to relevant category
  };


  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a onClick={() => navigateToDemo(item.category)} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;