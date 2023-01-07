import React from "react";
import "./BrandsStyle.css";
import { google, shopify, slack, atlassian, dropbox, nike } from "./import";

const Brands = () => {
    return (
        <div className="brand section__padding">
            <div>
                <img src={google} alt="google" srcset="" />
            </div>

            <div>
                <img src={shopify} alt="shopify" srcset="" />
            </div>
            <div>
                <img src={slack} alt="slack" srcset="" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" srcset="" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" srcset="" />
            </div>
            {/* <div>
                <img src={nike} alt="nike" srcset="" />
            </div> */}

        </div>
    );
};

export default Brands;
