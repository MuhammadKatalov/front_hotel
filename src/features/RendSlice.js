import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rends: [],
    services: []
}

export const fetchRends = createAsyncThunk(
    'rends/fetchRends',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('/rends');
            const data = res.json();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const postRends = createAsyncThunk(
    'rends/postRends',
    async ({ registrationDate, releaseDate, services, room }, thunkAPI) => {
        try {
            
            const state = thunkAPI.getState();
            const res = await fetch(`/rends/rend/${room}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${state.auth.token}`,
                },
                body: JSON.stringify({
                    registrationDate,
                    releaseDate,
                    services
                })
            });
            const data = await res.json();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const rendsSlice = createSlice({
    name: 'rends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postRends.fulfilled, (state, action) => {
                state.rends.push(action.payload)
            })
            .addCase(fetchRends.fulfilled, (state, action) => {
                state.rends = action.payload
            })
    }
})

export default rendsSlice.reducer