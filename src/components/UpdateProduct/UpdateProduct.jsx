import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, productName, brandName, shortDescription, price, category, rating, productImg, brandImg } = product;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const productName = form.product_name.value;
        const brandName = form.brand_name.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const productImg = form.product_image.value;
        const brandImg = form.brand_image.value;

        const updatedProduct = { productName, brandName, shortDescription, price, category, rating, productImg, brandImg }
        console.log(updatedProduct);

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Product updated successfully!')
                }
            })
    }

    return (
        <div className="bg-base-200 p-20">
            <h2 className="text-4xl font-bold text-center mb-8">Update Product</h2>
            <form onSubmit={handleUpdate}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_name" defaultValue={productName} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_name" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" defaultValue={shortDescription} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full" name="category">
                                <option disabled selected>Pick category</option>
                                <option>Appetizer</option>
                                <option>Main Course</option>
                                <option>Deserts</option>
                                <option>Drinks</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_image" defaultValue={productImg} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_image" defaultValue={brandImg} placeholder="Brand Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-block bg-gray-700 text-white normal-case hover:text-black" />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </form>
        </div>
    );
};

export default UpdateProduct;