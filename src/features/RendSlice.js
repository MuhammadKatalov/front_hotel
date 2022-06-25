import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rends: []
}

export const rendsSlice = createSlice({
    name: 'rends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default rendsSlice.reducer