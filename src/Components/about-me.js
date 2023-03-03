import React from "react";
import '../styling/about-me.css';
import images from '../images/images.jpeg';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="about-me-component grid grid-rows-[200px_minmax(1px,_1fr)_100px] grid-flow-col h-45 justify-items-center gap-4 p-20">
                <div className="flex-auto justify-center p-10 animate-bounce">
                    <p className="top-80" id="about-me text-center">
                        Hello there, nice to see you here! Do enjoy your visit, and hopefully you learn a few things from here.
                    </p>
                </div>
                
                <div className="about-me-section ">
                    <div className="pb-20 text-center font-medium text-3xl">
                        <h1>Here's little bit about me</h1>
                    </div>
                    
                    <div className="about-me-div pl-60 flex-auto content-center grid grid-cols-2 gap-10 justify-between">
                        <div>
                            <p className="about-me-description text-left">
                                I'm a software developer with a Bachelor's degree in Computer Engineering from the Copperbelt University.<br />
                                I love writing and reading, and all things tech.   
                            </p>
                        </div>
                        <div>
                            <img className="object-center" src={images} alt="me"></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;