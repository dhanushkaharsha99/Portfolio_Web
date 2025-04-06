import React, { useState } from 'react';
import { useEffect } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';


const works = () => {

  const [item, setItem] = useState({name : 'all'});
  const [projects , setprojects] = useState ([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all"){
      setprojects(projectsData);
    }
    else{
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setprojects(newProjects);
    }
  },[item]);

  const handleClick = (e,index) => {
    setItem({name : e.target.textContent});
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
      {projectsNav.map((item, index) => {
        return (
          <span onClick={(e) => {
              handleClick(e, index);
          }} 
          className={`${active === index ? 'active-work' : " "} work__item`} key={index}>{item.name}</span>
        );
      })}
    </div>
      <div className="work__container container grid">
      {projects.map((item) => {
        return <WorkItems item={item} key={item.id}/>
      })}
      </div>
    </div>
  );
};

export default works
