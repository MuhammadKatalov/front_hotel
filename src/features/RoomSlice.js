import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: [],
};

export const fetchRoom = createAsyncThunk("room/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3400/rooms");
    const data = await res.json();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoom.fulfilled, (state, action) => {
      state.room = action.payload;
    });
  },
});

export default roomSlice.reducer;
