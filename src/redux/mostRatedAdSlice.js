import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getMostRatedAds = createAsyncThunk('mostRatedAd/getMostRatedAds', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getMostRatedAds);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const mostRatedAdSlice = createSlice({
    name: "getMostRatedAds",
    initialState: { ads: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMostRatedAds.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getMostRatedAds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ads = action.payload.data;
            })
            .addCase(getMostRatedAds.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default mostRatedAdSlice.reducer;
