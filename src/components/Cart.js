import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div>
            <h1>Items in the cart are:</h1>
            {cartItems.map((item) => {
                return <h1>{item}</h1>
            })}
        </div>
    )
};

export default Cart;