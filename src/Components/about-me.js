import React from "react";
import images from '../images/images.jpeg';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="about-me-component grid grid-rows-[200px_minmax(1px,_1fr)_100px] grid-flow-col h-45 justify-items-center gap-4 p-10" id="aboutMe">
                <div className="flex-auto justify-center p-2 animate-bounce font-normal text-lg mobile:font-medium mobile:text-2xl">
                    <p className="top-80" id="about-me text-center">
                        Hello there, nice to see you here! Do enjoy your visit, and hopefully you learn a few things from here.
                    </p>
                </div>
                
                <div className="about-me-section ">
                    <div className="pb-20 text-center font-small text-2xl mobile:font-medium mobile:text-3xl">
                        <h1>Here's little bit about me</h1>
                    </div>
                    
                    <div className="about-me-div flex-auto content-center grid grid-cols-1 mobile:grid-cols-2 gap-10 justify-between">
                        <div>
                            <p className="about-me-description text-left">
                                I'm a software developer with a Bachelor's degree in Computer Engineering from the Copperbelt University.<br />
                                I love writing and reading, and all things tech.   
                            </p>
                        </div>
                        <div>
                            <img className="object-center hover:animate-wiggle" src={images} alt="me"></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;