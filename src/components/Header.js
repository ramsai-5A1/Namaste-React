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
        <div className="flex justify-between bg-pink-200 shadow-lg m-1 h-[150px] sm:bg-green-300">
            <div className="logo-container">
                <img
                    className="w-50 h-[150px]" 
                    src={LOGO_URL}
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 bg-green-200 rounded-lg">
                        Online status: {onlineStatus ? greenTick : redCross}
                    </li>
                    <li className="px-4 bg-green-200 rounded-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 bg-green-200 rounded-lg">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 bg-green-200 rounded-lg">
                        <Link to="/contactus">Contact</Link>
                    </li>
                    <li className="px-4 bg-green-200 rounded-lg">
                        <Link to="/grocery">Groceries</Link>
                    </li>
                    <li className="px-4 bg-green-200 rounded-lg">
                        <Link to="/">Cart</Link>
                    </li> 
                    
                    <button className="bg-green-200" onClick={handleLoginButton}>{text}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
