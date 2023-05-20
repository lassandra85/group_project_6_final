import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';


const initialState = {
    user: { email: null, password: null, confirmPassword: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },    
  },
})



export const authReducer = authSlice.reducer;