import React from "react";

export default function NewCategory({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("New Category")}>
      New Category
    </button>
  );
}