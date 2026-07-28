import React from "react";

const ArticleCard = ({ category, date, title }) => {
  return (
    <div className="article-card">
      <div className="article-header">
        <span className="category">{category}</span>
        <span className="date">{date}</span>
      </div>

      <h2>{title}</h2>

      <a href="/" className="read-more">
        Read Article →
      </a>
    </div>
  );
};

export default ArticleCard;