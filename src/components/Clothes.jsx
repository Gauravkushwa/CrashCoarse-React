// export default function Clothes(){
//     return(
//         <div className="div">
//             <p>Clothes</p>
//         </div>
//     )
// }
import React from 'react';

export default function Clothes({ onCategorySelect }) {
  return (
    <button className="category-button" onClick={() => onCategorySelect('nuevo')}>
      Clothes
    </button>
  );
}

