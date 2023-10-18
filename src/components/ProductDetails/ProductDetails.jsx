import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData();

    const { _id, productName, brandName, shortDescription, price, rating, productImg, brandImg } = product;

    const handleAddCart = () => {
        toast.success('Product successfully added to the cart!')
    }

    return (
        <div className="min-h-screen my-auto">
            <h2 className='text-4xl font-bold text-center mt-10 mb-20'>{productName} Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{productName}</h2>
                    <p>{shortDescription}</p>
                    <p> <span className="font-bold">Price:</span> ${product.price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddCart} className="btn btn-error normal-case text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ProductDetails;