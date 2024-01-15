

const Offers = () => {
    const specialOffers = [
        {
            id: 1,
            title: '25% Off Spring Sale',
            description: 'Limited-time offer on selected spring items.',
            image: 'https://i.ibb.co/h7YKSWx/spring-season-sale-with-offers-flowers-52683-33353.jpg',
        },
        {
            id: 2,
            title: 'Free Shipping Weekend',
            description: 'Enjoy free shipping on all orders this weekend.',
            image: 'https://i.ibb.co/NK52dCL/free-shipping-badge-with-truck-illustrtaion-100456-1502.jpg',
        },
        {
            id: 3,
            title: 'Summer Clearance',
            description: 'Save up to 40% on summer essentials. Limited stock!',
            image: 'https://i.ibb.co/3zqgYZK/end-summer-sale-promotion-illustration-23-2148625157.jpg',
          },
    ];

    return (
        <section className="p-8">
            <h2 className='text-4xl font-bold text-center mt-10 mb-20'>Special Offers</h2>
            <div className="flex flex-col lg:flex-row justify-around gap-12">
                {specialOffers.map((offer) => (
                    <div key={offer.id} className="p-6 rounded-md shadow-md">
                        <img src={offer.image} alt={offer.title} className="w-[400px] h-[400px] mb-4 rounded-md" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                            <p className="text-gray-400">{offer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offers;
