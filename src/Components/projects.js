import React from "react";
import '../styling/projects.css'

class Projects extends React.Component {
    render () {
        return (
            <div id="projects">
                <h2>Projects</h2>
                <p className="projects-description">There are a couple of things I have worked on, some of which are as a result of where I have worked and are private projects.<br />
                    Interested in seeing some of my works? See more on my <a href="https://github.com/Mwansasquared" target="_blank" rel="noopener noreferrer">github profile</a>.
                </p>
                <div className="projects-section">
                    <section className="projects">
                        <h3>RFID Driving License</h3>
                        <p>RFID driving licence web app built with javascript.</p>
                    </section>
                    <section className="projects">
                        <h3>Palindrome Checker</h3>
                        <p>Simple palindrome checker built with plain javascript</p>
                    </section>
                    <section className="projects">
                        <h3>Portfolio</h3>
                        <p>Simple portfolio website built using ReactJS</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Projects;