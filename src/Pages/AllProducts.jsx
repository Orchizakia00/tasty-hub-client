import { Link, useLoaderData } from "react-router-dom";

const AllProducts = () => {

    const allProducts = useLoaderData();

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10'>All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                {allProducts.map(product => (
                    <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
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

export default AllProducts;