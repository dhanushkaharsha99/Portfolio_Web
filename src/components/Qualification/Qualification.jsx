import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                  
                  
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Student</h3>
                            <span className="qualification__subtitle">Dharmaraja College - Kandy</span>
                            <div className="qualification__calander">
                                <i className="uil uil-calendar-alt"></i>2010 - 2018
                            </div>
                        </div>
                        <div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        <div>
                            <h3 className="qualification__title">Undergraduate Software Engineering</h3>
                            <span className="qualification__subtitle">Open University Sri Lanka</span>
                            <div className="qualification__calander">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Qualification
