import React from "react";

// import { Feature } from "../../components";
import Feature from "../../components/feature/Feature.jsx";

import "./WhatSolatoStyle.css";

const WhatSolato = () => {
    return (
        <div className="whatsolato section__margin" id="solato">
            <div className="whatsolato-feature">
                <Feature
                    title="What is Solato"
                    text="lorem40hssh  shhhshhjj sjjjskkksh  sjjjsk TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet. The service costs nothing because it is supported by ads, but users have the option of paying for an ad-free version with enhanced features."
                />
            </div>
            <div className="whatsolato-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond imagination
                </h1>
                <p>Explore the Library</p>
            </div>
            <div className="whatsolato-container">
                <Feature
                    title="Risk Management"
                    text="Risk Management on AAVE flash-loans"
                ></Feature>

                <Feature
                    title="Knowledgebase"
                    text=" Documentation for Risk Management on AAVE flash-loans"
                ></Feature>

                <Feature
                    title="Education"
                    text=" Documentation on Risk Management on AAVE flash-loans"
                ></Feature>
            </div>
        </div>
    );
};

export default WhatSolato;
