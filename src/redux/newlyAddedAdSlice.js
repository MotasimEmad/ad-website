import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getNewlyAddedAds = createAsyncThunk('newlyAddedAd/getNewlyAddedAds', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getNewlyAddedAds);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const newlyAddedAdSlice = createSlice({
    name: "getNewlyAddedAds",
    initialState: { ads: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewlyAddedAds.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getNewlyAddedAds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ads = action.payload.data;
            })
            .addCase(getNewlyAddedAds.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default newlyAddedAdSlice.reducer;
