import React from "react";
import "./BlogStyle.css";
import { Article } from "../../components/";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
    return (
        <div className='blog section__padding id="blog"'>
            <div className="blog-heading">
                <h1 className="gradient__text">
                    Solato Blog - Explore the World!
                </h1>
            </div>
            <div className="blog-container">
                <div className="blog-container_groupA">
                    <Article
                        imgUrl={blog01}
                        date="Sep 26, 2022"
                        text="Blockchain and Risk Management in Finance. Let's explore!"
                    />
                </div>
                {/* <h3 className="gradient__subtext">
                    Automate Your Transactions
                </h3> */}
                {/* </div> */}
                {/* <div className="blog-container">
                <div className="blog-container_groupA">
                    <Article />
                </div> */}

                <div className="blog-container_groupB">
                    <Article
                        imgUrl={blog02}
                        date="Sep 26, 2022"
                        text="Blockchain and Risk Management in Finance. Let's explore!"
                    />
                    <Article
                        imgUrl={blog03}
                        date="Sep 26, 2022"
                        text="Blockchain and Risk Management in Finance. Let's explore!"
                    />
                    <Article
                        imgUrl={blog04}
                        date="Sep 26, 2022"
                        text="Blockchain and Risk Management in Finance. Let's explore!"
                    />
                    <Article
                        imgUrl={blog05}
                        date="Sep 26, 2022"
                        text="Blockchain and Risk Management in Finance. Let's explore!"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
