import React from "react";

const CategoryTabs = () => {
  return (
    <div className="category-tabs">
      <button className="active">All</button>
      <button>Engineering</button>
      <button>Architecture</button>
      <button>Strategy</button>
      <button>Product</button>
    </div>
  );
};

export default CategoryTabs;