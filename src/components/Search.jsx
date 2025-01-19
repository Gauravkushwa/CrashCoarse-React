import React from "react";

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBox;
