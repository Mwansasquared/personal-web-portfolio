import React from "react";

class Contact extends React.Component {
    render () {
        return (
            <div className="p-8 grid grid-cols-1 justify-items-center" id="contact">
                <div className="contact-content" id="contact-call">
                    <p className="pb-10">Intrigued and want to get to know me more?
                        Send me a message.
                        Let's get talking, I'd love to hear from you.
                    </p>
                
                {/* <div className="contact-content" id="contact-form-section"> */}
                    {/* <h2 className="pb-10">Contact</h2> */}
                    <form id="contact-form" className="justify-items-center">
                        <input className="form-inputs w-80 border-solid border-2 border-gray-500 rounded-lg" type="text" placeholder="Full Name"/><br /><br />
                        <input className="form-inputs w-80 border-solid border-2 border-gray-500 rounded-lg" type="email" placeholder="Email Address"/><br /><br />
                        <textarea className="form-inputs w-80 border-solid border-2 border-gray-500 rounded-lg" id="form-textarea" type="textarea" placeholder="Message"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;