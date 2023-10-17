/* eslint-disable react/no-unescaped-entities */

const Review = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center my-10'>Customer's Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/qFCQH3Q/photo-1540189549336-e6e99c3679fe-ixlib-rb-4-0.jpg" className='h-72' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">Cashew Nut Salad!</h2>
                        <p>Cashew Nut Salad delivers a perfect crunch with vibrant veggies, roasted cashews, and zesty vinaigrette.</p>
                        <div className="card-actions justify-center">
                            -- John
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className='h-72 w-44' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">Pancakes!</h2>
                        <p>Fluffy, Sweet, and Irresistibly Delicious Pancakes: A Perfect Breakfast Treat!</p>
                        <div className="card-actions justify-center">
                            -- Jenny
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/bBDZFwK/images-q-tbn-ANd9-Gc-Rb-H7-Ov0-Ik-Vr-ZHn-Xh-Fa-Y3-LBynpl-HOJR2-XPez-KOGh-Rs-O0e-FLJVc-Lvwchg5-F2-DZx.jpg" className='h-72' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">Beef Burger!</h2>
                        <p>Savory, Juicy Burger: Culinary Perfection in Every Mouthwatering Bite!</p>
                        <div className="card-actions justify-center">
                            -- Andy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;