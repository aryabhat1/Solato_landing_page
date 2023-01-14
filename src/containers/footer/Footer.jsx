import React from "react";
import "./FooterStyle.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
    return (
        <div className="footer section__margin">
            <div className="footer-heading">
                <h1 className="footer-heading-text">Get in Touch</h1>
                <h1 className="gradient__text">
                    Building with Solato means you are part of an active
                    community
                </h1>
            </div>

            {/* <h2>Join our Community</h2>
                <button>CONTACT US</button> */}

            <div className="footer-btn">
                <button>Join Community</button>
            </div>

            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>Solato LLP.</p>
                    <p>7, Peterbrook Rise, Shirley, Solihull, B90 1JH,</p>
                    <p>Birmingham, West Midlands,</p>{" "}
                    <p>England, United Kingdom</p>
                </div>

                <div className="footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>

                    <p>Contact</p>
                </div>

                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Phone: +91-7410147125</p>
                    <p>Email: sushant.pru@gmail.com</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p>2023 Solato. All rights reserved.</p>
            </div>
        </div>
        // </div>
    );
};

export default Footer;
