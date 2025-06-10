import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBrands = createAsyncThunk(
  'brands/getAllBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
