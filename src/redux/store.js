import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './vehicles/slice';
import { filtersReducer } from './filters/slice';
import { brandsReducer } from './brands/slice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filters: filtersReducer,
    brands: brandsReducer,
  },
});
