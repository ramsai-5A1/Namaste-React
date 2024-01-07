import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../../utils/useGetOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const buttonInformation = ["Login", "Logout"];

const greenTick = '\u2713'; 
const redCross = '\u274C';

const Header = () => {
    const [login, setLogin] = useState(true);
    const [text, setText] = useState(buttonInformation[0]);
    const onlineStatus = useGetOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    //const purchasedHistoryProducts = useSelector((store) => store.purchasedHistory.products);
    console.log(cartItems);
    //console.log(purchasedHistoryProducts);

    const handleLoginButton = () => {
        if (login) {
            setText(buttonInformation[1]);
        } else {
            setText(buttonInformation[0]);
        }
        setLogin(!login);
    }

    return (
        <div className="flex justify-between  shadow-lg m-1 h-[150px] bg-gray-200">
            <div className="logo-container">
                <img
                    className="w-50 h-[150px]" 
                    src={LOGO_URL}
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 bg-black text-white rounded-lg">
                        Online status: {onlineStatus ? greenTick : redCross}
                    </li>
                    <li className="px-4 bg-white rounded-lg hover:bg-gray-500 hover:text-black">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 bg-white rounded-lg hover:bg-gray-500 hover:text-black">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 bg-white rounded-lg hover:bg-gray-500 hover:text-black">
                        <Link to="/contactus">Contact</Link>
                    </li>
                    <li className="px-4 bg-white rounded-lg hover:bg-gray-500 hover:text-black">
                        <Link to="/grocery">Groceries</Link>
                    </li>
                    <li className="px-4 bg-white rounded-lg font-bold hover:bg-gray-500 hover:text-black">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li> 
                    
                    <button className="bg-black text-white hover:bg-gray-500 hover:text-black rounded-lg px-4" onClick={handleLoginButton}>{text}</button>
                    <li className="font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
