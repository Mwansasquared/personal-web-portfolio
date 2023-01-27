import React from "react";
import '../styling/about-me.css';
// import images from '../images/images.jpeg';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="about-me">
                <div>
                    {/* <img id="background-image" src={image} alt="Me"></img> */}
                    <p id="about-me">
                        Hello there, nice to see you here! Do enjoy your visit, and hopefully you learn a few things from here.
                    </p>
                </div>
                
                <div className="about-me-section">
                    <h2>Here's little bit about me</h2>
                    <p className="about-me-description">
                        I'm a software developer with a Bachelor's degree in Computer Engineering from the Copperbelt University.<br />
                        I love writing and reading, and all things tech.   
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;