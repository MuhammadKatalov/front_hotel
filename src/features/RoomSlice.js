import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: null,
  reviews: [],
};

export const fetchRoom = createAsyncThunk(
  "room/fetch",
  async (id, thunkAPI) => {
    try {
      const res = await fetch("/rooms");
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postReview = createAsyncThunk(
  "reviews/post",
  async ({ review }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch("http://localhost:3400/reviews/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify({ text: review }),
      });

      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const patchReviews = createAsyncThunk(
  "reviews/patch",
  async ({ id, review }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`http://localhost:3400/reviews/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify({ text: review }),
      });

      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  "reviews/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3400/reviews");
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteReviews = createAsyncThunk(
  "reviews/delete",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`http://localhost:3400/reviews/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoom.fulfilled, (state, action) => {
        state.room = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(deleteReviews.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((item) => {
          return item._id !== action.payload;
        });
      })
      .addCase(patchReviews.fulfilled, (state, action) => {});
  },
});

export default roomSlice.reducer;
