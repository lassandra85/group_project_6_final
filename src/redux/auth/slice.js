import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
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
  pet: [],
  token: null,
  isLoggedIn: false,
  isLoading: false,
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
        state.pet = payload.pet;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload;
      })
      .addCase(addMyPet.pending,state=>{
        state.isLoading = true;
      })
      .addCase(addMyPet.fulfilled, (state) => {
        state.isLoading=false;
      })

      .addCase(deletePet.fulfilled, (state, { payload }) => {
        const index = state.user.pet.findIndex(pet => pet._id === payload.id);
        state.user.pet.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          logOut.pending,
          getUserInfo.pending,
          updateUser.pending,
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
