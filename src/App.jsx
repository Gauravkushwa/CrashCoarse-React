// import { useEffect, useState } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Search from "./components/Search";
// import Cartcomp from "./components/Cartcomp";

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/products")
//       .then((response) => response.json())
//       .then((data) => {
        
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <>
//       <Header />
//       <Home />
//       <Search />

//       <div className="products-list">
//         {products.map((product) => (
//           <Cartcomp
//             key={product.id}
//             img={product.images && product.images[0]} 
//             temp={product.title}
//             cost={`$${product.price}`}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Cartcomp from "./components/Cartcomp";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially, display all products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.name === category)
      );
    }
  };

  return (
    <>
      <Header onCategorySelect={handleCategorySelect} />
      <Home />
      <Search />

      <div className="products-list">
        {filteredProducts.map((product) => (
          <Cartcomp
            key={product.id}
            img={product.images && product.images[0]}
            temp={product.title}
            cost={`$${product.price}`}
          />
        ))}
      </div>
    </>
  );
}

export default App;
