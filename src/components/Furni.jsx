// export default function Furni(){
//     return(
//         <div className="div">
//             <p>Furniture</p>
//         </div>
//     )
// }

import React from "react";

export default function Furni({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("Furniture")}>
      Furniture
    </button>
  );
}
