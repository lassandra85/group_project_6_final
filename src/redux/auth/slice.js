import { createSlice,  isAnyOf } from '@reduxjs/toolkit';
import { register, login } from './operations';


const initialState = {
    user: { email: null, password: null,},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
  extraReducers: builder => builder 
    .addMatcher(
      isAnyOf(register.fulfilled,
                login.fulfilled), (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      }
    )
})



export const authReducer = authSlice.reducer;