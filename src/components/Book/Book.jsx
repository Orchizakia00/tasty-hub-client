
const Book = () => {
    return (
        <div className="mt-20">
            <h2 className='text-4xl font-bold text-center my-10'>Booking Service</h2>
            <div className="hero bg-base-200 h-fit pb-20 lg:w-[1400px] mx-auto rounded-xl">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-semibold mt-5">Book us for your events</h1>
                        <p className="py-6">
                            At Tasty Hub, we believe in creating delightful culinary experiences that linger in your memory long after you’ve savored the last bite. We understand that dining is not just about food; it’s an art, a celebration, and a cherished moment with your loved ones. To ensure your dining experience is seamless and memorable, we offer an easy and convenient booking service.
                        </p>
                        <button className="btn btn-error text-white normal-case">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;