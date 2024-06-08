import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getNotifications = createAsyncThunk('notification/getNotifications', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getNotifications, {
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

const notificationsSlice = createSlice({
    name: "notification",
    initialState: { notifications: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNotifications.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getNotifications.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload.data.notifications);
                state.notifications = action.payload.data.notifications;
            })
            .addCase(getNotifications.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default notificationsSlice.reducer;
