// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://pets-rest-api.onrender.com/api';

// // export const updateUser = createAsyncThunk(
// //   'user/updateUser',
// //   async (data, thunkAPI) => { // data = {id: , key: , value: ,} деструктуризировать
// //     try {
// //       const response = await axios.patch(`auth/${id}`, data); // как динамически подставлять дату
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.messsage);
// //     }
// //   }
// // );
// export const getUserInfo = createAsyncThunk('user/getUserInfo', async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('/user');
//         return response.data.user;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.messsage);
//     }
// })