import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Mobile from './Mobile';
import UIUx from './UIUx';

const Skills = () => {
  return (
    
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Levels</span>

        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
            <Mobile/>
            <UIUx/>
        </div>
    </section>
  )
}

export default Skills
