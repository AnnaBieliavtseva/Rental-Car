import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../constants/constants';

axios.defaults.baseURL = baseUrl;

export const getCars = createAsyncThunk(
  'vehicles/getAllCars',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        ...filters,
      };

      const response = await axios.get('/cars', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'vehicles/getCar',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
