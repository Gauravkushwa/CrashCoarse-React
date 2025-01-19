
import React from "react";

export default function Grosery({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("Grosery")}>
      Grosery
    </button>
  );
}