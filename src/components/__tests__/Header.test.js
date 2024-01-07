import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import AppStore from "../../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";

describe("Header-Component testing", () => {
    test("Should have login button on screen", () => {
        render(
            <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button", { name: "Login" });
        expect(button).toBeInTheDocument();

        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();

        const cartItems = screen.getByText("Cart (0 items)");
        expect(cartItems).toBeInTheDocument();

        //Regex
        const onlineStatus = screen.getByText(/Online/);
        expect(onlineStatus).toBeInTheDocument();
    });

    test("Should change from Login button to Logout button onClick", () => {
        render(
            <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
        
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });
        expect(logoutButton).toBeInTheDocument();

        fireEvent.click(logoutButton);
        
        const loginButtonAgain = screen.getByRole("button", { name: "Login" });
        expect(loginButtonAgain).toBeInTheDocument();
    })
});