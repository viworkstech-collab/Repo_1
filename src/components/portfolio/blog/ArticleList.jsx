import React from "react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    category: "ENGINEERING",
    date: "March 14, 2024",
    title:
      "Scaling Distributed Systems: Lessons from the Edge of Infrastructure."
  },
  {
    category: "ARCHITECTURE",
    date: "February 28, 2024",
    title:
      "The Modern Data Stack is Dead. Long Live the Modular Engine."
  },
  {
    category: "STRATEGY",
    date: "January 15, 2024",
    title:
      "Why Intellectual Clarity is the Ultimate Competitive Advantage."
  },
  {
    category: "ENGINEERING",
    date: "December 04, 2023",
    title:
      "Rust vs C++: A Nuanced Take on Memory Safety in High-Frequency Environments."
  },
  {
    category: "PRODUCT",
    date: "November 22, 2023",
    title:
      "Beyond MVP: Building for Permanence in a Throwaway Culture."
  }
];

const ArticleList = () => {
  return (
    <section className="article-list">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          category={article.category}
          date={article.date}
          title={article.title}
        />
      ))}
    </section>
  );
};

export default ArticleList;