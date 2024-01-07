import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom"

describe("Contact-us page testcases", () => {
    test("Should load Contact component", () => {
        render(<Contactus/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button inside contact component", () => {
        render(<Contactus/>)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});


describe("text-checking testcases", () => {
    test("should check for appropriate text", () => {
        render(<Contactus/>)
        const submitText = screen.getByText("Submit");
        expect(submitText).toBeInTheDocument();
    });
    
    test("checking for header text", () => {
        render(<Contactus/>);
        const headerText = screen.getByText("Contact us via whatsapp");
        expect(headerText).toBeInTheDocument();
    });
});

describe("placeholder testcases", () => {
    test("checking for placeholder text", () => {
        render(<Contactus/>);
        const placeholderText = screen.getByPlaceholderText("name");
        expect(placeholderText).toBeInTheDocument();
    });
    
    test("should load placeholder Text", () => {
        render(<Contactus/>);
        const placeholderText = screen.getByPlaceholderText("message");
        expect(placeholderText).toBeInTheDocument();
    });
    
    it("should load 2 input boxes", () => {
        render(<Contactus/>);
        const boxes = screen.getAllByRole("textbox");
        expect(boxes.length).toBe(2);
    });
});