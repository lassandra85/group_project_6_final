import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const updateUser = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('auth/update', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messsage);
    }
  }
);
