import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((language, index) => {
        return (
          <button
            type="button"
            className="filter-btn btn"
            key={index}
            onClick={() => filterItems(language)}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
};

export default Categories