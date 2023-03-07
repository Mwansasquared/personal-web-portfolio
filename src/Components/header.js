import React from "react";

class Header extends React.Component {
    render () {
        return (
            <header className="header flex-auto bg-slate-300 border-gray-200 h-16 py-2 sticky top-0 p-2">
                <div>
                        <nav className="top-nv">
                            <ul className="flex justify-around">
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