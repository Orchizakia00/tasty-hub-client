/* eslint-disable react/prop-types */

const Cart = ({ cart }) => {

    console.log(cart);

    return (
        <div>
            <h2>Cart</h2>
            { (
                <ul>
                    {cart.map(item => (
                        <li key={item._id}>{item.productName}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
