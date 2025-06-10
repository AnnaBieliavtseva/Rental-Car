import { createSlice, current } from '@reduxjs/toolkit';
import { getCarById, getCars } from './operations';

const initialState = {
  items: [],
  currentCar: null,
  totalPages: 0,
  totalCars: 0,
  currentPage: 1,
  error: false,
  loading: false,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.items = action.payload.cars;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
        state.currentPage = action.payload.page;
        state.loading = false;
      })
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getCarById.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.loading = false;
      });
  },
});

export const vehiclesReducer = slice.reducer;

