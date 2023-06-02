import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  getUserInfo,
  updateUser,
  deletePet,
  addMyPet,
} from './operations';

const initialState = {
  user: {
    email: null,
    id: '',
    name: '',
    birthday: '',
    phone: '',
    city: '',
    avatarURL: null,
    isNewUser: true,
  },
  pets: [],
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.token = payload.token;
        const newName = payload.email.split('@')[0];
        state.user.name = newName;
        state.isLoggedIn = true;
        state.user.id = payload.id;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.user.id = payload.id;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pets = payload.pets;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, payload };
      })
      .addCase(addMyPet.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        const index = state.pets.indexOf(pet => pet.id === payload);
        state.pets.splice(index, 1);
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          logOut.pending,
          getUserInfo.pending,
          updateUser.pending,
          addMyPet.pending,
          deletePet.pending
        ),

        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          logIn.fulfilled,
          logOut.fulfilled,
          deletePet.fulfilled,
          getUserInfo.fulfilled,
          updateUser.fulfilled
        ),

        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          logIn.rejected,
          logOut.rejected,
          deletePet.rejected,
          getUserInfo.rejected,
          updateUser.rejected,
          addMyPet.rejected
        ),

        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
