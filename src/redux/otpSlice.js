import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const OTPSend = createAsyncThunk('user/OTPSend', async (OTPData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await fetch(apiEndpoints.otpSend, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(OTPData),
    });
    const data = await response.json();
    if (data.status !== 201) {
      return rejectWithValue(data);
    }

    return data;
  } catch (errorOTP) {
      return rejectWithValue(errorOTP.message);
  }
});

export const OTPVerify = createAsyncThunk('user/OTPVerify', async (OTPData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await fetch(apiEndpoints.otpVerify, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(OTPData),
    });

    if (!response.ok) {
      const errorOTPData = await response.json();
      return rejectWithValue(errorOTPData);
    }

    const data = await response.json();
    if (data.status !== 200) {
      return rejectWithValue(data);
    }

    return data;
  } catch (errorOTP) {
      return rejectWithValue(errorOTP.message);
  }
});

const otpSlice = createSlice({
  name: "otp",
  initialState: { isLoadingotp: false, errorOTP: null},
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(OTPSend.pending, (state, action) => {
              state.isLoadingotp = true;
              state.errorOTP = null;
          })
          .addCase(OTPSend.fulfilled, (state, action) => {
              state.isLoadingotp = false;
          })
          .addCase(OTPSend.rejected, (state, action) => {
              state.isLoadingotp = false;
              state.errorOTP = action.payload.error.message;
          })


          .addCase(OTPVerify.pending, (state, action) => {
            state.isLoadingotp = true;
            state.errorOTP = null;
        })
        .addCase(OTPVerify.fulfilled, (state, action) => {
            state.isLoadingotp = false;
        })
        .addCase(OTPVerify.rejected, (state, action) => {
            state.isLoadingotp = false;
            state.errorOTP = action.payload.error.message;
        });
  }
});

export default otpSlice.reducer;