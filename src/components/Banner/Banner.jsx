import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[80vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Savor Culinary Delights</h1>
                    <p className="mb-5">
                        Discover mouthwatering recipes, gourmet secrets, and culinary inspirations. Join our flavorful journey today!
                    </p>
                    <button className="btn btn-outline btn-error normal-case">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;