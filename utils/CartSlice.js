import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["pizza", "burger"]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearItems} = CartSlice.actions;

export default CartSlice.reducer;