import React from "react";
import '../styling/contact.css'

class Contact extends React.Component {
    render () {
        return (
            <div id="contact">
                <div className="contact-content" id="contact-call">
                    <p>Intrigued and want to get to know me more?
                        Send me a message.
                        Let's get talking, I'd love to hear from you.
                    </p>
                </div>
                <div className="contact-content" id="contact-form-section">
                    <h2>Contact</h2>
                    <form id="contact-form">
                        <input className="form-inputs" type="text" placeholder="Full Name"/><br /><br />
                        <input className="form-inputs" type="email" placeholder="Email Address"/><br /><br />
                        <textarea className="form-inputs" id="form-textarea" type="textarea" placeholder="Message"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;