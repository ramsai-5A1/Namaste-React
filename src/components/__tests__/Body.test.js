import "@testing-library/jest-dom";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { dataFromMock } from "../mocks/RestraListMock";

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve([]);
//         }
//     });
// });

// Todo: need to change this
global.fetch = jest.fn(() => (
    Promise.resolve({
        json: () => Promise.resolve([])
    })
));

describe("Body Component testing", () => {
    test("Should check for search  and filter funcionality", async () => {
         await act(async () => render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
         ));

        // jest.useFakeTimers();
        // const waitPromise = new Promise((resolve) => {
        //     setTimeout(resolve, 1000);
        // });
        // await waitPromise;

        //Checking for all restra cards before clicking on search button
        const cardsLoadedBeforeSearch = screen.getAllByTestId("restraCard");
        expect(cardsLoadedBeforeSearch.length).toBe(23);

        //checking for existance of search button
        const searchButton = screen.getByRole(
            "button",
            { name: "Search" }
         );
        expect(searchButton).toBeInTheDocument();

        //getting the input box 
        const inputBox = screen.getByTestId("searchInput");
        expect(inputBox).toBeInTheDocument();

        //writing the value as pizza in input box
        fireEvent.change(inputBox, { target: { value: "Pizza" } });

        //clicking on the search button
        fireEvent.click(searchButton);

        //checking whether the cards got filtered or not
        const cardsLoadedAfterSearch = screen.getAllByTestId("restraCard");
        expect(cardsLoadedAfterSearch.length).toBe(6);

        //checking for top rated resturants button
        const displayTopRatedButton = screen.getByRole("button", { name: "Display Top Rated Resturants" });
        expect(displayTopRatedButton).toBeInTheDocument();

        //clicking that top rated button
        fireEvent.click(displayTopRatedButton);

        //After clicking on that button, checking whether resturant cards got filtered or not
        const cardsAfterFiltering = screen.getAllByTestId("restraCard");
        expect(cardsAfterFiltering.length).toBe(4);

        //Again getting hold of display all resturants button
        const cardsOnClickOfShowAllRestraunts = screen.getByRole("button", { name: "Display all Resturants" });
        expect(cardsOnClickOfShowAllRestraunts).toBeInTheDocument();

        //clicking on that button
        fireEvent.click(cardsOnClickOfShowAllRestraunts);

        //again asserting whether its loading all resturants or not
        const cardsAfterClicking = screen.getAllByTestId("restraCard");
        expect(cardsAfterClicking.length).toBe(23);

    });

    test("Should check for filter functionality for another receipe", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ));

        // jest.useFakeTimers();
        // const waitPromise = new Promise((resolve) => {
        //     setTimeout(resolve, 1000);
        // });
        // await waitPromise;

        
        const cardsBeforeSearching = screen.getAllByTestId("restraCard");
        expect(cardsBeforeSearching.length).toBe(23);

        const inputBox = screen.getByTestId("searchInput");
        expect(inputBox).toBeInTheDocument();

        const searchButton = screen.getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();

        fireEvent.change(inputBox, { target: { value: "Biryani" }});
        fireEvent.click(searchButton);

        const cardsAfterSearch = screen.getAllByTestId("restraCard");
        expect(cardsAfterSearch.length).toBe(5);

        const displayTopRatedButton = screen.getByRole("button", { name: "Display Top Rated Resturants" });
        expect(displayTopRatedButton).toBeInTheDocument();

        fireEvent.click(displayTopRatedButton);
        const cardsAfterTopRatedButton = screen.getAllByTestId("restraCard");
        expect(cardsAfterTopRatedButton.length).toBe(1);

        const displayAllResturantsButton = screen.getByRole("button", { name: "Display all Resturants" });
        expect(displayAllResturantsButton).toBeInTheDocument();
        fireEvent.click(displayAllResturantsButton);

        const cardsInFinalRender = screen.getAllByTestId("restraCard");
        expect(cardsInFinalRender.length).toBe(23);
    })
});