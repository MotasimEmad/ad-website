import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getCompanyById = createAsyncThunk('company/getCompanyById', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(`${apiEndpoints.getCompanyById}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCompanyAdsById = createAsyncThunk('company/getCompanyAdById', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(`${apiEndpoints.getCompanyAdsById}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCompanyBannerAdsById = createAsyncThunk('company/getCompanyBannerAdsById', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(`${apiEndpoints.getCompanyBannerAdsById}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const companySlice = createSlice({
  name: "company",
  initialState: { company: {}, ads: [], banners: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.company = action.payload.data;
      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(getCompanyAdsById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanyAdsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ads = action.payload.data;
      })
      .addCase(getCompanyAdsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCompanyBannerAdsById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanyBannerAdsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.banners = action.payload.data;
      })
      .addCase(getCompanyBannerAdsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export default companySlice.reducer;