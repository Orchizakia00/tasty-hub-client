/* eslint-disable react/prop-types */

const Brand = ({ brand }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={brand.brandImg} alt={brand.brandName} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{brand.brandName}</h2>
            </div>
        </div>
    );
};

export default Brand;