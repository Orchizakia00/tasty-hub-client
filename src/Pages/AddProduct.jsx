
const AddProduct = () => {

    const handleAdd = e => {
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
        console.log(productName, brandName, shortDescription, price, category, rating, productImg, brandImg);
    }

    return (
        <div className="bg-base-200 p-20">
            <h2 className="text-4xl font-bold text-center mb-8">Add New Product</h2>
            <form onSubmit={handleAdd}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product_image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_image" placeholder="Brand Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-gray-700 text-white normal-case hover:text-black" />

            </form>
        </div>
    );
};

export default AddProduct;