

const Policy = () => {
    // Example data for shipping and return information
    const shippingInfo = {
        shippingPolicy: 'Free standard shipping on all orders over $50.',
        deliveryTime: 'Estimated delivery time: 3-5 business days.',
    };

    const returnInfo = {
        returnPolicy: 'Easy returns within 30 days of purchase.',
        returnInstructions: 'To initiate a return, contact our customer support at support@example.com.',
    };

    return (
        <section className="bg-base-200 px-8 py-12 mt-10">
            <h2 className='text-4xl font-bold text-center mb-10'>Shipping and Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-base p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Shipping Information</h3>
                    <p className="text-base-400">{shippingInfo.shippingPolicy}</p>
                    <p className="text-base-400">{shippingInfo.deliveryTime}</p>
                </div>
                <div className="bg-base p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Return Policy</h3>
                    <p className="text-base-400">{returnInfo.returnPolicy}</p>
                    <p className="text-base-400">{returnInfo.returnInstructions}</p>
                </div>
            </div>
        </section>
    );
};

export default Policy;
