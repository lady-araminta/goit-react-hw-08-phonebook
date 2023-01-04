import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (userObject, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userObject);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
