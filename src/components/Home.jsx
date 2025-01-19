// src/components/Home.jsx

import React, { useState, useEffect } from "react";
import ProductCard from "../components2/ProductCard/ProductCard"; // Updated path

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example: Fetching products from an API
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
