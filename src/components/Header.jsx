// import Account from "./Account";
// import All from "./All";
// import Cart from "./Cart";
// import Clothes from "./Clothes";
// import Elocto from "./Electo";
// import Furni from "./Furni";
// import Order from "./Order";
// import Toy from "./Toy";
// import User from "./User";

// export default function Header() {
//   return (
//     <div className="head">
//       <h1>Shopi</h1>
//       <div className="allpro">
//         <div className="first">
//           <All />
//           <Clothes />
//           <Elocto />
//           <Furni />
//           <Toy />
//         </div>

//         <div className="second">
//           <User />
//           <Order />
//           <Account />
//           {/* <Cart/> */}
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }

import Account from "./Account";
import All from "./All";
import Cart from "./Cart";
import Clothes from "./Clothes";
import Elocto from "./Electo";
import Furni from "./Furni";
import Grosery from "./Grosery";
import Miscellaneous from "./Miscellaneous";
import NewCategory from "./New";
import Order from "./Order";
import Toy from "./Toy";
import User from "./User";

export default function Header({ onCategorySelect }) {
  return (
    <div className="head">
      <h1>Shopi</h1>
      <div className="allpro">
        <div className="first">
          <All onCategorySelect={onCategorySelect} />
          <Clothes onCategorySelect={onCategorySelect} />
          <Elocto onCategorySelect={onCategorySelect} />
          <Furni onCategorySelect={onCategorySelect} />
          <Toy onCategorySelect={onCategorySelect} />
          <Grosery onCategorySelect={onCategorySelect} />
          <Miscellaneous onCategorySelect={onCategorySelect} />
          <NewCategory onCategorySelect={onCategorySelect} />
        </div>

        <div className="second">
          <User />
          <Order />
          <Account />
          {/* <Cart/> */}
        </div>
      </div>
      <hr />
    </div>
  );
}
