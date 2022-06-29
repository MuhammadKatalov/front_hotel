import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rends: []
}

export const postRends = createAsyncThunk(
    'rends/fetchRands',
    async ({registrationDate, releaseDate, service, id}, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const res = await fetch(`/rends/${id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${state.auth.token}`,
                  },
                body: JSON.stringify({
                    registrationDate,
                    releaseDate,
                    service
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
    }
})

export default rendsSlice.reducer