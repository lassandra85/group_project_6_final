import  axios  from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}



export const register = createAsyncThunk(
    "auth/register", 
    async (credentials, thunkAPI) => { 
        try {
            const response = await axios.post('/users/signup', credentials)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.messsage)
        }
    }
)