const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./CartSlice";
import purchasedHistoryReducer from "./purchasedHistorySlice";

const AppStore = configureStore({
    reducer: {
        cart: cartReducer,
        purchasedHistory: purchasedHistoryReducer
    }
});

export default AppStore;