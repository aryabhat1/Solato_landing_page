import React from "react";
import "./DevelopersStyle.css";
// import devImage from '../../assets/possibility.png'
import devImage from "../../assets/developer.jpg";

const Developers = () => {
    return (
        <div className="developers section__padding">
            <div className="developers-image">
                <img src={devImage} alt="devImage" srcset="" />
            </div>
            <div className="developers-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibility are beyond our imagination
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi exercitationem dolore voluptas quibusdam voluptatibus,
                    ullam, tempora quod tempore quis modi obcaecati. Libero,
                    voluptatum neque unde quod natus in dignissimos culpa?
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Developers;
