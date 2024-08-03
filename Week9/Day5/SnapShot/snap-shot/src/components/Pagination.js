import React from "react";

function Pagination({ currentPage, onPageChange }) {
    return (
      <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    );
  }
  
  export default Pagination;