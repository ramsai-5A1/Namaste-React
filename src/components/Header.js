import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const buttonInformation = ["Login", "Logout"];

const Header = () => {
    const [login, setLogin] = useState(true);
    const [text, setText] = useState(buttonInformation[0]);

    useEffect(() => {
        console.log("USEEFFECT INVOKED");
    }, []);

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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={handleLoginButton}>{text}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
