import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getAdById = createAsyncThunk('adDetails/getAdById', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(`${apiEndpoints.getAdById}${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const adDetailsSlice = createSlice({
    name: "adDetails",
    initialState: { ad: {}, isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAdById.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAdById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ad = action.payload.data;
            })
            .addCase(getAdById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default adDetailsSlice.reducer;
