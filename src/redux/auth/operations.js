import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeUserData } from 'helpers';

axios.defaults.baseURL = 'https://pets-rest-api.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/register', credentials);
      const { email } = response.data;
      console.log(email);
      if (email) {
        const data = await axios.post('auth/login', credentials);
        const total = { email, ...data.data };
        setAuthHeader(data.data.token);

        return total;
      }

      return;
    } catch (error) {
      const { code } = error.response.data;
      if (code === 11000)
        return rejectWithValue({
          message: 'User with this email already exists.',
        });
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue({ message: 'Email or password is incorrect.' });
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('auth/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);

    }
  }
);

export const addMyPet = createAsyncThunk(
  'auth/addMyPet',
  async (newFormData, { rejectWithValue }) => {
    try {
      await axios.post('/pets', newFormData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'auth/deleteMyPet',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`pets/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/user`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      if (data.formFile) {
        const response = await axios.patch(`auth/${data.id}`, data.formFile);
        console.log('response.data formFile', response.data);
        return response.data;
      } else {
        const response = await axios.patch(
          `auth/${data.id}`,
          changeUserData(data)
        );
        console.log('response.data', response.data);
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeStatus = createAsyncThunk(
  'user/changeStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch('api/users/status', data);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
