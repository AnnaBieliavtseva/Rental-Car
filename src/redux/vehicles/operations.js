import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../constants/constants';

export const getCars = createAsyncThunk(
  'vehicles/getAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/cars`);
      console.log(response.data);
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
      const response = await axios.get(`${baseUrl}/cars/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
