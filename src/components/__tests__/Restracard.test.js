import { fireEvent, render, screen } from "@testing-library/react";
import Restracard from "../Restracard";
import MOCK_DATA from "../mocks/RestracardMock.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("RestraCard component testing", () => {
    test("Should render restraCard component by passing props data", () => {
        render(
            <BrowserRouter>
                <Restracard dataObj={MOCK_DATA}/>
            </BrowserRouter>
        );
        
        const title = screen.getByText("Real Deepak Punjabi Dhaba");
        expect(title).toBeInTheDocument();

        const exploreButton = screen.getByText("Explore");
        expect(exploreButton).toBeInTheDocument();

        fireEvent.click(exploreButton);
        expect(window.location.pathname).toBe("/resturants");
    });
});