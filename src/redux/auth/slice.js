import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const initialState = {
  user: { email: null, password: null, id: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error:null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled, logOut.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

