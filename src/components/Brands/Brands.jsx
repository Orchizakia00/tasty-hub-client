/* eslint-disable react/prop-types */

import Brand from "../Brand/Brand";

const Brands = ({ products }) => {
    return (
        <div className="mb-10">
            <h2 className='text-4xl font-bold text-center my-10'>Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Brands;