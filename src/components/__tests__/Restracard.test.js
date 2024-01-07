import { fireEvent, render, screen } from "@testing-library/react";
import Restracard from "../Restracard";
import MOCK_DATA from "../mocks/RestracardMock.json"
import MOCK_DATA_PROMOTED_ONE from "../mocks/RestracardPromotedMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../Restracard";

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

    test("Should render promotedRestraCard", () => {
        const ResturantCardPromoted = withPromotedLabel(Restracard);
        render(
            <BrowserRouter>
                <ResturantCardPromoted dataObj={MOCK_DATA_PROMOTED_ONE}/>
            </BrowserRouter>
        );

        const promotedLabel = screen.getByText("Promoted");
        expect(promotedLabel).toBeInTheDocument();

        const title = screen.getByText("Chapati Curry");
        expect(title).toBeInTheDocument();
    })
});