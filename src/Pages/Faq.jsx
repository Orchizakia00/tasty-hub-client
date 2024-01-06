
const Faq = () => {
    return (
        <div className="mt-4 min-h-screen">
            <h2 className='text-4xl font-bold text-center my-10'>Frequently Asked Questions</h2>
            <div className="w-[70%] mx-auto mt-5">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are your products suitable for people with allergies?
                    </div>
                    <div className="collapse-content">
                        <p>Our product labels include allergen information. If you have specific concerns or questions about allergens, please check the product labels or contact our customer support team.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I contact customer support?
                    </div>
                    <div className="collapse-content">
                        <p>You can reach our customer support team by email/phone. Visit our Contact Us page for more details. We aim to respond to inquiries within time frame.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you have any ongoing promotions or discounts?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we frequently run promotions and discounts. Keep an eye on our homepage, subscribe to our newsletter, or follow us on social media for the latest updates on special offers.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We have a single-day return policy. If you are not satisfied with your purchase, please review our return policy on our website for instructions on returning items.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I modify or cancel my order after placing it?
                    </div>
                    <div className="collapse-content">
                        <p>Unfortunately, once an order is placed, we are unable to modify or cancel it. Please double-check your order before completing the purchase.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I place an order?
                    </div>
                    <div className="collapse-content">
                        <p>You can easily place an order through our website. Simply browse our catalog, add items to your cart, and proceed to checkout. Follow the prompts to complete your purchase.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I track my order?
                    </div>
                    <div className="collapse-content">
                        <p>Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the couriers site.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;