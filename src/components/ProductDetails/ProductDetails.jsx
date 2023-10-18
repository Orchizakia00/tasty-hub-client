import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const [cart, setCart] = useState([]);
    const product = useLoaderData();

    const { _id, productName, shortDescription, productImg, price } = product;

    const handleAddCart = () => {

        const newItem = {
            _id,
            productName,
            shortDescription,
            price,
            productImg
          };
      
          // Check if the item is already in the cart
          const existingItem = cart.find(item => item._id === newItem._id);
          if (existingItem) {
            toast.error('Product is already in the cart!');
          } else {
            // Add the item to the cart
            setCart([...cart, newItem]);
            toast.success('Product successfully added to the cart!');
          }

        // toast.success('Product successfully added to the cart!')
    }

    return (
        <div className="min-h-screen my-auto">
            <h2 className='text-4xl font-bold text-center mt-10 mb-20'>{productName} Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{productName}</h2>
                    <p>{shortDescription}</p>
                    <p> <span className="font-bold">Price:</span> ${price}</p>
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