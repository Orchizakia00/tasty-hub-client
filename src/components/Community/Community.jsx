
const Community = () => {
    return (
        <div className="my-16">
            <h1 className="text-4xl font-bold text-center mt-10 mb-20">Our Community</h1>
            <div className="flex flex-col lg:flex-row bg-base-200 rounded-xl p-10">
                <div className="flex-1 text-left flex items-center justify-center">
                    <div data-aos="fade-right">
                        <h1 className="text-2xl font-bold mb-6">Before you go, Subscribe to Our Newsletter!</h1>
                        <p>Stay in the loop! Sign up for our newsletter and receive exclusive offers, <br /> travel tips, and destination updates delivered directly to your inbox.</p>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Community;