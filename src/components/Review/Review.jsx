/* eslint-disable react/no-unescaped-entities */

const Review = () => {
    return (
        <div className='mb-16 mt-20 mx-auto lg:w-[1400px] w-[90%]'>
            <h2 className='text-4xl font-bold text-center my-10'>Customer's Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card card-side bg-base-100 shadow-xl w-96">
                    <figure><img src="https://i.ibb.co/y5ZcZM9/mcdonalds-hamburger-happy-meal-pineapple-1-3-product-tile-desktop-wid-829-hei-515-dpr-off.jpg" className='h-72 w-40' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">McDonald's Happy Meal</h2>
                        <p>A perfect blend of joy and nutrition for children. With a toy, burger, fries, and a drink, it offers a delightful dining experience, making kids smile with every bite.</p>
                        <div className="card-actions justify-center">
                            -- John
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl w-96">
                    <figure><img src="https://www.nicepng.com/png/detail/852-8527806_buffalo-chicken-pepperoni-pizza-pizza-hut-slice.png" className='h-72 w-44' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">Buffalo Chicken Pizza!</h2>
                        <p>A fiery fusion of flavors! Tangy buffalo sauce meets succulent chicken, layered on a crispy crust, topped with cheese and veggies. Spicy, savory perfection for pizza enthusiasts!</p>
                        <div className="card-actions justify-center">
                            -- Jenny
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl w-96">
                    <figure><img src="https://i.ibb.co/W396LPN/cad1f79df6de47c3071bc97052bc1802.jpg" className='h-72 w-40' alt="Movie" /></figure>
                    <div className="card-body w-10">
                        <h2 className="card-title">Starbucks Caramel Macchiato</h2>
                        <p>A heavenly blend of velvety steamed milk, rich espresso, and vanilla syrup, adorned with a caramel drizzle. Sweet, smooth, and indulgent, a coffee lover's dream come true.</p>
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