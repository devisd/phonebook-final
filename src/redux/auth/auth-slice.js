import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
