import React, { useState } from "react";
import "./NavbarStyle.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.jpg";

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>

        <p>
            <a href="#idwhatsolato">Solato</a>
        </p>

        <p>
            <a href="#resources">Resources</a>
        </p>
        <p>
            <a href="#developers">Developers</a>
        </p>
        <p>
            <a href="#contact">Contact Us</a>
        </p>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="container-navbar">
            <div className="container-navbar-side">
                {/* Left Side */}
                <div className="navbar-links-container-left">
                    <img src={logo} alt="no logo" srcset="" />
                </div>

                {/* Right Side */}
                <div className="navbar-links-container-right">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <div className="navbar-menu scale-up-center">
                        <div className="navbar-menu_container_links">
                            <Menu />
                        </div>
                        <div className="navbar-menu_container_links_sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
