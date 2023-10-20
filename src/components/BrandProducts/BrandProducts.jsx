/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandProducts = () => {

    const { brandName, productName } = useParams();
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log(productName, brandName);

    useEffect(() => {
        if (brandName) {
            fetch(`https://tasty-hub-server-80re6nwbh-orchis-projects-3691b97f.vercel.app/product?brand=${brandName}`)
                .then(res => res.json())
                .then(data => {
                    const filteredProducts = data.filter(product => product.brandName === brandName);
                    setProducts(filteredProducts);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [brandName, productName]);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + products.length) % products.length);
    };


    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10'>{brandName} Products</h2>

            {/* Slider */}
            {products.length > 0 && (
                <div className="carousel w-full h-[400px] relative mt-20" >
                    {products.map((product, index) => (
                        <div
                            key={product._id}
                            className={`carousel-item absolute w-full ${index === currentSlide ? "block" : "hidden"
                                }`}
                        >
                            <img src={product.productImg} className="flex justify-center mx-auto h-[360px]" alt={product.productName} />
                        </div>
                    ))}

                    <div className="absolute flex justify-between items-center w-full top-1/2 transform -translate-y-1/2">
                        <button onClick={goToPreviousSlide} className="btn btn-circle">❮</button>
                        <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
            )}


            {/* products */}
            <h2 className='text-4xl font-bold text-center mt-20 mb-10'>Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                {products.map(product => (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.productImg} alt={product.productName} className="rounded-xl h-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.productName}</h2>
                            <p> <span className="font-bold">Brand Name:</span> {product.brandName}</p>
                            <p> <span className="font-bold">Category:</span> {product.category}</p>
                            <p> <span className="font-bold">Price:</span> ${product.price}</p>
                            <p> <span className="font-bold">Rating:</span> {product.rating} / 5</p>


                            <div className="card-actions">

                                <Link to={`/productDetails/${product._id}`}>
                                    <button className="btn btn-error normal-case text-white">Details</button>
                                </Link>
                                <Link to={`/updateProduct/${product._id}`}>
                                    <button className="btn btn-warning normal-case text-white">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default BrandProducts;