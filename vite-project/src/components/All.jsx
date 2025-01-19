import React, {useState} from "react";

export default function All(){
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p onClick={fetchProducts}>All</p>
      {loading && <p>Loading...</p>}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}