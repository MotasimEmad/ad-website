import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(apiEndpoints.forgetPassword, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.status !== 200) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const passwordSlice = createSlice({
  name: "password",
  initialState: { isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(forgetPassword.pending, (state, action) => {
              state.isLoading = true;
              state.error = null;
          })
          .addCase(forgetPassword.fulfilled, (state, action) => {
              state.isLoading = false;
          })
          .addCase(forgetPassword.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
          });
  }
});

export default passwordSlice.reducer;