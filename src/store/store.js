import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import RendSlice from "../features/RendSlice";
import RoomSlice from "../features/RoomSlice";

const store = configureStore({
  reducer: {
    rends: RendSlice,
    auth: AuthSlice,
    room: RoomSlice,
  },
});

export default store;
