import React from "react";

class Header extends React.Component {
    render () {
        return (
            <header className="heade bg-slate-300 border-gray-200 h-16 px-80 py-2">
                <div>
                        <nav className="top-nv">
                            <ul className="flex justify-between">
                                <li className="top-nav-list mr-3">
                                    <a href="#aboutMe">About Me</a>
                                </li>
                                <li className="top-nav-lis mr-3">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="top-nav-lis mr-3">
                                    <a href="#blogs">Blogs</a>
                                </li>
                                <li className="top-nav-lis mr-3">
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