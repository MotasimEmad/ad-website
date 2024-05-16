import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getPremiumAds = createAsyncThunk('premiumAd/getPremiumAd', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getPremiumAds);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const premiumAdSlice = createSlice({
    name: "premiumAd",
    initialState: { ads: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPremiumAds.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPremiumAds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ads = action.payload.data;
            })
            .addCase(getPremiumAds.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default premiumAdSlice.reducer;
