import React from "react";
import "./BlogStyle.css";
import { Article } from "../../components/";

const Blog = () => {
    return (
        <div className='blog section__padding id="blog"'>
            <div className="blog-heading">
                <h1 className="gradient__text">Solato Blog - Explore the World!</h1>
                <h3 className="gradient__subtext">
                    Automate Your Transactions
                </h3>
            </div>
            <div className="blog-container">
                <div className="blog-container_groupA">
                    <Article />
                </div>

                <div className="blog-container_groupB">
                <Article />
                <Article />
                <Article />
                <Article />
                </div>
            </div>
        </div>
    );
};

export default Blog;
