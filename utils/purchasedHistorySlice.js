import { createSlice } from "@reduxjs/toolkit";

const purchasedHistorySlice = createSlice({
    name: "purchasedHistory",
    initialState: {
        products: ["watch", "laptop", "bottle"]
    },
    reducers: {
        addIntoProducts: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromProducts: (state) => {
            state.products.slice(1);
        }
    }
});

export const {addIntoProducts, removeFromProducts} = purchasedHistorySlice.actions;

export default purchasedHistorySlice.reducer;