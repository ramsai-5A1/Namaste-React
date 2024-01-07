import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom"

describe("Grocery component testing", () => {
    test("Should check for proper text", () => {
        render(<Grocery/>);
        const text = screen.getByText("Our Grocery Online Store");
        expect(text).toBeInTheDocument();
    });
});