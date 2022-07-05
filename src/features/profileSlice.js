import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  profileLoader: false
}

export const getUserById = createAsyncThunk('getUserById/fetch', async (userId, thunkApi) => {
  try {
    const res = await fetch(`/users/${userId}`);

    return res.json();
  } catch (e) {
    thunkApi.rejectWithValue(e);
  }
});

export const patchUserById = createAsyncThunk('patchUserById/fetch', async ({userId, firstName, lastName, login}, thunkAPI) => {
  try {
    const res = await fetch(`/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        login,
      })
    });
    return res.json();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const patchUserAvatar = createAsyncThunk('patchUserAvatar/fetch', async ({userId, data}, thunkAPI) => {
  try {

    const formData = new FormData();
    formData.append('avatar', data);
    
    const res = await fetch(`/users/avatar/${userId}`, {
      method: "PATCH",
      body: formData
    });

    return res.json();

  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserById.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.profileLoader = false;
    },
    [getUserById.pending]: (state) => {
      state.profileLoader = true;
    },
    [patchUserById.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [patchUserAvatar.fulfilled]: (state, action) => {
      state.user = action.payload;
    }
  }
});


export default profileSlice.reducer;