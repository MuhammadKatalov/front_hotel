import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import RendSlice from "../features/RendSlice";

const store = configureStore({
  reducer: {
    rends: RendSlice,
    auth: AuthSlice,
  },
});

export default store;
