import React from "react";
import '../styling/header.css';

class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="header-columns">
                        <nav className="top-nav">
                            <ul >
                                <li className="top-nav-list">
                                    <a href="#aboutMe">About Me</a>
                                </li>
                                <li className="top-nav-list">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="top-nav-list">
                                    <a href="#blogs">Blogs</a>
                                </li>
                                {/* <li className="top-nav-list">
                                    <a href="#contact">Resume</a>
                                </li> */}
                                <li className="top-nav-list">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                </div>
            </header>
        )
    }
}

export default Header;