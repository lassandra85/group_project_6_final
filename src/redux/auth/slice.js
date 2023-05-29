import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { register, logIn, logOut, getUserInfo, updateUser,deletePet } from './operations';


const initialState = {
  user: { email: null, password: null, _id: '', name: '', birthday: '', phone: '', city: '', avatarURL: null },
  pet: [],
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
       state.user.email = payload.email;
       state.user._id = payload._id;
       state.user.password = payload.password;
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

      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pet = payload.pet;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = { ...state.user, payload }; // state.Object.keys().includes payload? {... обновить} : push)
      })

      .addCase(deletePet.fulfilled, (state, { payload }) => {
        const index = state.user.pet.findIndex(pet => pet._id === payload.id);
        state.user.pet.splice(index, 1);
      })
        .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending, getUserInfo.pending, updateUser.pending, deletePet.pending),

        state => {
          state.isLoading = true;
        })
      .addMatcher(

        isAnyOf(register.fulfilled, logIn.fulfilled, logOut.fulfilled, deletePet.fulfilled,   getUserInfo.fulfilled,
          updateUser.fulfilled),

        state => {
          state.isLoading = false;
          state.error = null;
        })
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected, deletePet.rejected,  getUserInfo.rejected,
          updateUser.rejected),

        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        });
  },
});

export const authReducer = authSlice.reducer;

