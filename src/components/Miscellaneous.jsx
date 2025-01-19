import React from "react";

export default function Miscellaneous({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("Miscellaneous")}>
      Miscellaneous
    </button>
  );
}