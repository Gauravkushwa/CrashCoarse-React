import { useEffect, useState } from 'react'
import '../App.css'
import './products.css'
import axios from 'axios'
export const Products = () => {

    const [prodcuts, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
         try {
            const response = await axios.get('https://dummyjson.com/products?limit=100')
            setProducts(response.data.products)
         } catch (error) {
            console.log('error fetching products', error);
            
         }
        };
        fetchProduct()
    }, []);
    return (
        <>
         <h1>These is Products Page</h1>
         <div className="products">
         
            {prodcuts.map((product) => (
                <ul key={product.id } className="product-item">
                    <img src={product.thumbnail} alt={product.title} width="100" />
                    <h2>{product.id}</h2>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </ul>
                
            ))}
         
         </div>
        </>
    )
}