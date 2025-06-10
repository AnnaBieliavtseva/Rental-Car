import { createSlice } from '@reduxjs/toolkit';
import { getBrands } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getBrands.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getBrands.pending, state => {
        state.loading = true;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const brandsReducer = brandsSlice.reducer;
