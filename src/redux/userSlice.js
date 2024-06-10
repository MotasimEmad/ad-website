import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await fetch(apiEndpoints.getUserProfile, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
      return rejectWithValue(error.message);
  }
});

export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await fetch(apiEndpoints.updateUserProfile, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    return data;
  } catch (error) {
      return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: {}, isLoading: false, error: null, isUpdaingLoading: false, updateError: null},
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(getUserProfile.pending, (state, action) => {
              state.isLoading = true;
              state.error = null;
          })
          .addCase(getUserProfile.fulfilled, (state, action) => {
              state.isLoading = false;
              state.user = action.payload.data;
          })
          .addCase(getUserProfile.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
          })


          .addCase(updateUserProfile.pending, (state, action) => {
            state.isUpdaingLoading = true;
            state.updateError = null;
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.isUpdaingLoading = false;
            state.user = action.payload.data;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
            state.isUpdaingLoading = false;
            state.updateError = action.payload.error.message;
        });
  }
});

export default userSlice.reducer;