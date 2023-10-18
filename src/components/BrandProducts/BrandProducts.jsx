import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandProducts = () => {

    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (brandName) {
            fetch(`http://localhost:5000/product?brand=${brandName}`)
                .then(response => response.json())
                .then(data => {
                    const filteredProducts = data.filter(product => product.brandName === brandName);
                    setProducts(filteredProducts);
                })
                .catch(error => {
                    console.error("Error fetching products:", error);
                });
        }
    }, [brandName]);

    return (
        <div>
            <h2>{brandName} Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.productName}</li>
                ))}
            </ul>
        </div>
    );
};

export default BrandProducts;