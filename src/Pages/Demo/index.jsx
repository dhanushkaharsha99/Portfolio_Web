import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import './Demo.css';
import { workData } from '../../components/Works/workData.js';

const Demo = () => {
  const { category } = useParams(); // Get category from URL

  // Filter workData based on category
  const filteredProjects = category === "all" ? workData : workData.filter(project => project.category === category);

  return (
    <div className="card_container">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="card_left">
              <img src={project.image} alt="project_logo" className="card_img" />
            </div>
            <div className="card_right">
              <h1 className="card_title">{project.title}</h1>
              <h3 className="card_discription">{project.description}</h3>
              <a href={project.link_url} target="_blank" rel="noopener noreferrer">
                <img src={project.link_logo} alt="link_logo" className="card_link" />
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No projects available for this category.</p>
      )}
    </div>
  );
};

export default Demo;
