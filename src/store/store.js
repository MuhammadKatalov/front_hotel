import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import RendSlice from "../features/RendSlice";
import RoomSlice from "../features/RoomSlice";
import ServicesSlice from "../features/ServicesSlice";

const store = configureStore({
  reducer: {
    rends: RendSlice,
    auth: AuthSlice,
    room: RoomSlice,
    services: ServicesSlice
  },
});

export default store;
