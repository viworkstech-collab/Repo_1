import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="page-btn">← Earlier</button>

      <div className="page-numbers">
        <span className="active">01</span>
        <span>02</span>
        <span>03</span>
      </div>

      <button className="page-btn">Later →</button>
    </div>
  );
};

export default Pagination;