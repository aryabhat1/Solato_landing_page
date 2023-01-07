import React from "react";
import "./ContactStyle.css";

const Contact = () => {
    return (
        <div>
            <div className="container_contact">
                <div className="container_left">I am left</div>
                <div className="container_right">
                    I am right
                    <input
                        type="email"
                        placeholder="Please subscribe using your Email"
                    />
                </div>

                <h3>Get in touch</h3>
                <h1>Solato is supported by a big community</h1>
                <h1>
                    You can always find somebody to understand your concern and
                    support you
                </h1>
                <h4>Join the community</h4>

                {/* logo of discord */}

                {/* Sign Up */}
                <h2>Sign Up</h2>
                <h3>Be the first to hear from us</h3>
                {/* make a text box for email */}
            </div>
        </div>
    );
};

export default Contact;
