import React from "react";
import "./HeaderStyle.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-container">
        <h1 className="gradient__text">Web3 Automated Backend</h1>
        <h4 className="gradient__text__below">
          Enabling Developers to build smart programs that are way ahead in
          features
        </h4>
        <div className="header-container-button">
          <button type="button">USE CASES</button>

          <button type="button">START BUILDING</button>
        </div>

        <div className="header_content">
          <img src={people} alt="" srcset="no image" />
          <p>1,600 people requested access a </p>
        </div>
      </div>

      <div className="header_content_image">
        <img src={ai} alt="no logo" srcset="no image" />
      </div>
    </div>
  );
};

export default Header;
