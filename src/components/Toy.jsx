// export default function Toy(){
//     return(
//         <div className="div">
//             <p>Toys</p>
//         </div>
//     )
// }

import React from "react";

export default function Toy({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("Shoes")}>
      Shoes
    </button>
  );
}
