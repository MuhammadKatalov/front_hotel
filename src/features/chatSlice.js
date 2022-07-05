import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    messagesLoader: false,
    arrivalMessage: {}
}

export const getMessages = createAsyncThunk('getMessages/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('/messages/62c1bab17a4cbb0a0bc1118f');
        return res.json();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const postMessage = createAsyncThunk('postMessage/fetch', async ({sender, text}, thunkAPI) => {
    try {
        const res = await fetch('/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sender,
                conversationId: '62c1bab17a4cbb0a0bc1118f',
                text
            })
        });
        return res.json();
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        postWebMessage(state, action) {
            state.messages.push(action.payload)
        }
    },
    extraReducers: {
        [getMessages.fulfilled]: (state, action) => {
            state.messages = action.payload;
            state.messagesLoader = false;
        },
        [getMessages.pending]: (state) => {
            state.messagesLoader = true;
        },
        [postMessage.fulfilled]: (state, action) => {
            state.arrivalMessage = action.payload;
        }
    }
});

export const { postWebMessage } = chatSlice.actions;

export default chatSlice.reducer;