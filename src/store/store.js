import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import RendSlice from "../features/RendSlice";
import RoomSlice from "../features/RoomSlice";
import ServicesSlice from "../features/ServicesSlice";
import chatSlice from "../features/chatSlice";
import profileSlice from '../features/profileSlice';

const store = configureStore({
  reducer: {
    rends: RendSlice,
    auth: AuthSlice,
    room: RoomSlice,
    services: ServicesSlice,
    chat: chatSlice,
    profile: profileSlice
  },
});

export default store;
