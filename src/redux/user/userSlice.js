// import { createSlice } from '@reduxjs/toolkit';
// import { getUserInfo, updateUser } from './operations';
// // import userPhoto from '../../../image/user-photo-default.png';

// // const initialState = {
// //   name: '',
// //   email: '',
// //   birthday: '',
// //   phone: '',
// //   city: '',
// //   avatar: null,
// // };

// const userSlice = createSlice({
//     name: 'user',
//   initialState: {
//     user: {},
//     pet: []
//   },
//   extraReducers: builder => {
//     builder.addCase(getUserInfo.fulfilled, (state, action) => {
//       state.user = action.payload
//       })
//     }
// })

// export const userReducer = userSlice.reducer;