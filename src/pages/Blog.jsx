import React from "react";

import Navbar from "../components/portfolio/blog/Navbar";
import BlogHero from "../components/portfolio/blog/BlogHero";
import CategoryTabs from "../components/portfolio/blog/CategoryTabs";
import ArticleList from "../components/portfolio/blog/ArticleList";
import Pagination from "../components/portfolio/blog/Pagination";
import Footer from "../components/portfolio/blog/Footer";

import "../components/portfolio/blog/Blog.css";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <CategoryTabs />
      <ArticleList />
      <Pagination />
      <Footer />
    </>
  );
};

export default Blog;