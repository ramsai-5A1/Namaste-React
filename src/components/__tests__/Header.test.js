import { render, screen } from "@testing-library/react";
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
    });
});