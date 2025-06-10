import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './vehicles/slice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});
