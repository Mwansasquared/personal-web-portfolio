import React from "react";
import '../styling/blogs.css'

class Blogs extends React.Component {
    render () {
        return (
            <div id="blogs">
                <h2>Blogs</h2>
                <div>
                    <p>Here a few articles I have written on various topics, and some books I have authored. <br />
                    Like what you see and need some written work to be done? <a href="#contact">Leave me a message</a>
                    </p>
                </div>
                
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
            
        )
    }
}

export default Blogs;