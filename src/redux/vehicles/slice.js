import { createSlice } from '@reduxjs/toolkit';
import { getCarById, getCars } from './operations';

const initialState = {
  items: [],
  currentCar: null,
  totalPages: 0,
  totalCars: 0,
  currentPage: 1,
  error: null,
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

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    resetCars: state => {
      state.items = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.totalCars = 0;
    },
    resetCar: state => {
      state.currentCar = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        const { cars, totalPages, totalCars, page } = action.payload;
        if (page === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }
        state.totalPages = totalPages;
        state.totalCars = totalCars;
        state.currentPage = page;
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

export const vehiclesReducer = vehiclesSlice.reducer;
export const {resetCars, resetCar} = vehiclesSlice.actions
