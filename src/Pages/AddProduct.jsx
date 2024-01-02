import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;
        const productName = form.product_name.value || null;
        const brandName = form.brand_name.value;
        const shortDescription = form.short_description.value || "No description available";
        const price = form.price.value || 0;
        const category = form.category.value || "Other";
        const rating = form.rating.value || 0;
        const productImg = form.product_image.value || "default-product-image-url"; // Provide a default image URL
        const brandImg = form.brand_image.value;

        const newProduct = { productName, brandName, shortDescription, price, category, rating, productImg, brandImg }
        console.log(newProduct);

        fetch('https://tasty-hub-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Product added successfully!')
                }
            })
    }

    return (
        <div className="bg-base-100 px-5 lg:px-20 py-5">
            <h2 className="text-4xl font-bold text-center mb-8">Add New Product</h2>
            <form onSubmit={handleAdd}>

                <div className="flex-col flex lg:flex-row mb-8">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex-col flex lg:flex-row mb-8">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex-col flex lg:flex-row  mb-8">
                    <div className="form-control lg:w-1/2">
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
                    <div className="form-control lg:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex-col flex lg:flex-row  mb-8">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_image" placeholder="Brand Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-red-400 text-black normal-case hover:text-black hover:bg-red-200" />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </form>
        </div>
    );
};

export default AddProduct;