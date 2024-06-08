import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";


export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(apiEndpoints.login, {
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

    const token = response.headers.get('Authorization');
    const data = await response.json();
    return { data, token };

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(apiEndpoints.logout, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    return { data };

  } catch (error) {
    return rejectWithValue(error);
  }
});

export const userSignUp = createAsyncThunk('auth/userSignUp', async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(apiEndpoints.userSignUp, {
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

    const token = response.headers.get('Authorization');
    const data = await response.json();
    return { data, token };

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const companySignUp = createAsyncThunk('auth/companySignUp', async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(apiEndpoints.companySignUp, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: userData,
    });

    if (response.status !== 200) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    const token = response.headers.get('Authorization');
    return { data, token };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || null,
    isLoading: false,
    error: null,
  },
  reducers: {}, // Keep an empty reducers object
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, setLoading)
      .addCase(login.fulfilled, setUserAndToken)
      .addCase(login.rejected, setError)

      .addCase(logout.pending, setLoading)
      .addCase(logout.fulfilled, removeUserAndToken)
      .addCase(logout.rejected, setError)

      .addCase(userSignUp.pending, setLoading)
      .addCase(userSignUp.fulfilled, setUserAndToken)
      .addCase(userSignUp.rejected, setError)

      .addCase(companySignUp.pending, setLoading)
      .addCase(companySignUp.fulfilled, setUserAndToken)
      .addCase(companySignUp.rejected, setError);
  },
});

// Define reducer functions separately
const setLoading = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const setUserAndToken = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.data.data;
  state.token = action.payload.token;

  localStorage.setItem("token", action.payload.token);
  localStorage.setItem("user", JSON.stringify(action.payload.data.data));
};

const removeUserAndToken = (state, action) => {
  state.isLoading = false;
  state.user = null;
  state.token = null;

  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.error.message;
};
export const {} = authSlice.actions;

export default authSlice.reducer;