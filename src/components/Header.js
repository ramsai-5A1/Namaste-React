import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const buttonInformation = ["Login", "Logout"];

const Header = () => {
    const [login, setLogin] = useState(true);
    const [text, setText] = useState(buttonInformation[0]);

    const handleLoginButton = () => {
        if (login) {
            setText(buttonInformation[1]);
        } else {
            setText(buttonInformation[0]);
        }
        setLogin(!login);
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                    src={LOGO_URL}
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li> 
                    
                    <button className="login-button" onClick={handleLoginButton}>{text}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
