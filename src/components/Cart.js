import { useDispatch, useSelector } from "react-redux";
import {ItemList} from "./Accordion";
import {clearItems} from "../../utils/CartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    }

    return (
        <div className="py-56">
            <div className="text-center  m-2 p-2 border ">
                <div className="flex justify-between w-6/12 mx-auto">
                    <h1 className="font-bold p-5 underline">Items in the cart are:</h1>
                    <button className="rounded-lg p-5 m-5 border bg-black text-white hover:bg-gray-400 hover:text-black" onClick={handleClearCart}>Clear Cart</button>
                </div>

                {cartItems.length === 0 ? <h1>Cart is empty</h1> : <ItemList items={cartItems}/>}
                
            </div>
        </div>
    )
};

export default Cart;