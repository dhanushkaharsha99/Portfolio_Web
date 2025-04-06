import React, { useState } from 'react';
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* Web Development Service */}
                {toggleState === 0 || toggleState === 1 ? (
                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Web <br /> Development</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

                        <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                                <h3 className="services__model-title">Full Stack Developer</h3>
                                <p className="services__model-discription"> 
                                    Specializing in Full Stack Web Development, 
                                    deliver top-notch quality, transparent communication, and success in achieving business goals. 
                                </p>
                                <ul className="services__model-services grid">
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Custom-built web application Development</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">FrontEnd / BackEnd Web Development</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Interactive UI / UX element Interface</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* Mobile Development Service */}
                {toggleState === 0 || toggleState === 2 ? (
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">Mobile <br /> Development</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i> </span>

                        <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                                <h3 className="services__model-title">Mobile App Developer</h3>
                                <p className="services__model-discription"> 
                                    crafting top-notch, quality code ensures that your digital dreams 
                                    are not only realized but optimized for success.
                                </p>
                                <ul className="services__model-services grid">
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Android / Native App Development</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Excellent User Experience</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Pixel perfect & Responsive UI</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* Visual Designer Service */}
                {toggleState === 0 || toggleState === 3 ? (
                    <div className="services__content">
                        <div>
                            <i className="uil uil-edit services__icon"></i>
                            <h3 className="services__title">Visual <br /> Designer </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

                        <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                            <div className="services__model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                                <h3 className="services__model-title">Visual Designer</h3>
                                <p className="services__model-discription"> 
                                    Creating visually appealing, simple designs that improve user 
                                    experience as well as to being beautiful to look at.
                                </p>
                                <ul className="services__model-services grid">
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">High Quality illustration</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Photo Editing, Manipulation</p>
                                    </li>
                                    <li className="services__model-service">
                                        <i className="uil uil-check-circle services__model-icon"></i>
                                        <p className="services__model-info">Video Editing and Animations</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default Services;
