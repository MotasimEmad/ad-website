import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getPremiumAdvertisers = createAsyncThunk('premiumAdvertisers/getPremiumAdvertisers', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getPremiumAdvertisers);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const premiumAdvertisersSlice = createSlice({
    name: "premiumAdvertisers",
    initialState: { premiumAdvertisers: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPremiumAdvertisers.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPremiumAdvertisers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.premiumAdvertisers = action.payload.data;
            })
            .addCase(getPremiumAdvertisers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default premiumAdvertisersSlice.reducer;
