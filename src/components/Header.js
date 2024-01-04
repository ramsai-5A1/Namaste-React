import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../../utils/useGetOnlineStatus";

const buttonInformation = ["Login", "Logout"];

const greenTick = '\u2713'; 
const redCross = '\u274C';

const Header = () => {
    const [login, setLogin] = useState(true);
    const [text, setText] = useState(buttonInformation[0]);
    const onlineStatus = useGetOnlineStatus();

    const handleLoginButton = () => {
        if (login) {
            setText(buttonInformation[1]);
        } else {
            setText(buttonInformation[0]);
        }
        setLogin(!login);
    }

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg m-1 h-[150px] sm:bg-yellow-200">
            <div className="logo-container">
                <img
                    className="w-50 h-[150px]" 
                    src={LOGO_URL}
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status: {onlineStatus ? greenTick : redCross}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactus">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Groceries</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/">Cart</Link>
                    </li> 
                    
                    <button className="login-button" onClick={handleLoginButton}>{text}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
