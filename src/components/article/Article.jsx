import React from "react";
import "./ArticleStyle.css";

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className="blog-container_article">
            <div className="blog-container_article_image">
                <img src={imgUrl} alt="blog_image" srcset="" />
            </div>

            <div className="blog-container_article-container">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>

                <p>Read full Article</p>
            </div>
        </div>
    );
};

export default Article;
