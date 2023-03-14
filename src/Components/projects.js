import React from "react";

class Projects extends React.Component {
    render () {
        return (
            <div className="px-10 p-40 items-center" id="projects">
                <h2 className="text-3xl text-black font-semibold pb-10">Projects</h2>
                <div className="projects-description self-center pb-10">
                    <p>There are a couple of things I have worked on, some of which are as a result of where I have worked and are private projects.<br />
                        Interested in seeing some of my work? See more on my <a href="https://github.com/Mwansasquared" target="_blank" rel="noopener noreferrer">github profile</a>.
                    </p>
                </div>
                
                <div className="projects-section flex flex-col laptop:flex-row gap-10">
                    <div className="py-8 px-8 items-center max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <h3 className="text-2xl text-black font-semibold pb-10">RFID Driving License</h3>
                        <p>RFID driving licence web app built with javascript.</p>
                    </div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <h3 className="text-2xl text-black font-semibold pb-10">Palindrome Checker</h3>
                        <p>Simple palindrome checker built with plain javascript</p>
                    </div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <h3 className="text-2xl text-black font-semibold pb-10">Portfolio</h3>
                        <p>Simple portfolio website built using ReactJS</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;