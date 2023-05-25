import { createSlice } from '@reduxjs/toolkit';
// import userPhoto from '../../../image/user-photo-default.png';
import userPhoto from '../../image/user-photo-default.png'

const initialState = {
  name: '',
  email: 'vikit2000@ukr.net',
  birthday: '',
  phone: '',
  city: '',
  avatar: userPhoto,
};

const userSlice = createSlice({
    name: 'user',
  initialState,
  reducers: {
    updateUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
    extraReducers: builder => {

    }
})

export const userReducer = userSlice.reducer;