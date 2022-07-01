import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: []
}

export const fetchServices = createAsyncThunk('services/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('/services');
        const data = await res.json();
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.services = action.payload
            })
    }
})

export default servicesSlice.reducer