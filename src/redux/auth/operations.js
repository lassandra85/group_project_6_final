import  axios  from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeUserData } from "helpers";

axios.defaults.baseURL = 'https://pets-rest-api.onrender.com/api/'

const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

// let retry=false;

export const register = createAsyncThunk(
  'auth/register',
  async ({credentials}, { rejectWithValue }) => {
    try {
      const response = await axios.post('auth/register', credentials);
      const { email } = response.data;
      if (email) {
        const data = await axios.post('auth/login', credentials);        
        const total = {email, ...data.data}
        setAuthHeader(data.data.token);    

        return total;
      }      
        
      return
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
  async ( credentials, { rejectWithValue }) => {    
    try {
      
      const response = await axios.post('auth/login', credentials);
      console.log(response)
      setAuthHeader(response.data.token);     
      return response.data;
    } catch (error) {
      return rejectWithValue ({ message: 'Email or password is incorrect.' });
    }
  }
);

//додано
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

// export const getCurrentUser = createAsyncThunk(
//   'auth/currentUser',
//   async (_, { rejectWithValue, getState }) => {
//     if (!retry) {
//       const state = getState();
//       const currentToken = state.auth.token;
//       setAuthHeader(currentToken);
//     }

//     try {
//       const response = await axios.get('api/users/current');

//       const token = axios.defaults.headers.common.Authorization.split(' ')[1];
//       return { token, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       await axios.put('api/users/update', credentials);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const addMyPet = createAsyncThunk(
  'user/addMyPet',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post('api/pets', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'user/deleteMyPet',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/pets/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzM0ZDhkMGQ4NzY2YjVmY2E2Y2I1NSIsImlhdCI6MTY4NTI3ODEyMCwiZXhwIjoxNjg3MjY1MzIwfQ.eDM0hGZmVfMTLj6T0KvfGkl6LohWF9PjhhN8sXK9gq0';
export const getUserInfo = createAsyncThunk( 
  'auth/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`api/user`, {
            headers: {
          Authorization: `Bearer ${token}`
      }});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `api/auth/${data.id}`,
        changeUserData(data),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
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
