import { configureStore } from "@reduxjs/toolkit";
import RendSlice from "../features/RendSlice";

const store = configureStore({
    reducer: {
        rends: RendSlice
    }
})

export default store;