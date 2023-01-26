import React from "react";
import '../../src/styling/footer.css'

class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div>
                    <ul className="Socials">
                        <li className="socials-list">
                            <a href="https://github.com/Mwansasquared" target="_blank" rel="noopener noreferrer"><img className="facebook-socials" alt="Github"/>Github</a>
                        </li>
                        <li className="socials-list">
                            <a href="https://github.com/Mwansasquared" target="_blank" rel="noopener noreferrer"><img className="facebook-socials" alt="LinkedIn" />LinkedIn</a>
                        </li>
                        <li className="socials-list">
                            <a href="https://github.com/Mwansasquared" target="_blank" rel="noopener noreferrer"><img className="facebook-socials" alt="Facebook"/>Facebook</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="copyright">&copy; 2023</p>
                </div>
                
            </div>
        )
    }
}

export default Footer;