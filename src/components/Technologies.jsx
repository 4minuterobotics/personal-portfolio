// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import css from "../assets/img/css.png";
import docker from "../assets/img/docker.png";
import figma from "../assets/img/figma.png";
import git from "../assets/img/git.png";
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import mongodb from "../assets/img/mongodb.png";
import nodejs from "../assets/img/nodejs.png";
import reactjs from "../assets/img/reactjs.png";
import redux from "../assets/img/redux.png";
import tailwind from "../assets/img/tailwind.png";
import typescript from "../assets/img/typescript.png";
import threejs from "../assets/img/threejs.svg";
import wordpress from "../assets/img/wordpress.png"
import arduino from "../assets/img/arduino.png"
import sql from "../assets/img/sql.png"


import React from 'react'

const Technologies = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="technologies">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Technologies</h2>
                            <p>I use the following technologies regularly and have become second nature to me.<br></br> I'm still always willing to learn more and expand my knowledge.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={css} alt="tech" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="tech" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt="tech" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="tech" />
                                    <h5>git</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="tech" />
                                    <h5>HTML 5</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="tech" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="tech" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="tech" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={reactjs} alt="tech" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="tech" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="tech" />
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="tech" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                    <img src={threejs} alt="tech" />
                                    <h5>Three JS</h5>
                                </div>
                                <div className="item">
                                    <img src={wordpress} alt="tech" />
                                    <h5>Wordpress</h5>
                                </div>
                                <div className="item">
                                    <img src={arduino} alt="tech" />
                                    <h5>Arduino</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
      )
}

export default Technologies

