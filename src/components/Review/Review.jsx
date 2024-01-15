/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Review = () => {
    return (
        <div className='my-20 mx-auto lg:w-[1400px] w-[90%]'>
            <h2 className='text-4xl font-bold text-center my-10'>Customer's Review</h2>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex items-center gap-10'>
                        <div className='flex-1'>
                            <img src="https://i.ibb.co/y5ZcZM9/mcdonalds-hamburger-happy-meal-pineapple-1-3-product-tile-desktop-wid-829-hei-515-dpr-off.jpg" className='w-[500px] h-[400px]' alt="McDonald's Happy Meal" />
                        </div>
                        <div className='flex-1'>
                            <h2 className="font-bold text-3xl mb-10">McDonald's Happy Meal</h2>
                            <p>A perfect blend of joy and nutrition for children. With a toy, burger, fries, and a drink, it offers a delightful dining experience, making kids smile with every bite.</p>
                            <p className='font-mono mt-8 text-center'>--John</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center gap-10'>
                        <div className='flex-1'>
                            <img src="https://www.nicepng.com/png/detail/852-8527806_buffalo-chicken-pepperoni-pizza-pizza-hut-slice.png" className='w-[500px] h-[400px]' alt="Buffalo Chicken Pizza" />
                        </div>
                        <div className='flex-1'>
                            <h2 className="font-bold text-3xl mb-10">Buffalo Chicken Pizza</h2>
                            <p>A fiery fusion of flavors! Tangy buffalo sauce meets succulent chicken, layered on a crispy crust, topped with cheese and veggies. Spicy, savory perfection for pizza enthusiasts!</p>
                            <p className='font-mono mt-8 text-center'>--Chloe</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center gap-10'>
                        <div className='flex-1'>
                            <img src="https://i.ibb.co/W396LPN/cad1f79df6de47c3071bc97052bc1802.jpg" className='w-[500px] h-[400px]' alt="Starbucks Caramel Macchiato" />
                        </div>
                        <div className='flex-1'>
                            <h2 className="font-bold text-3xl mb-10">Starbucks Caramel Macchiato</h2>
                            <p>A heavenly blend of velvety steamed milk, rich espresso, and vanilla syrup, adorned with a caramel drizzle. Sweet, smooth, and indulgent, a coffee lover's dream come true.</p>
                            <p className='font-mono mt-8 text-center'>--Aana</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;