// export default function Elocto(){
//     return(
//         <div className="div">
//             <p>Electronic</p>
//         </div>
//     )
// }

import React from "react";

export default function Elocto({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect("Electronics")}>
      Electronics
    </button>
  );
}
