import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
  avatar: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {

    }
})

export const userReducer = userSlice.reducer;