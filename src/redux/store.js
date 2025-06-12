import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './vehicles/slice';
import { filtersReducer } from './filters/slice';
import { brandsReducer } from './brands/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favouritesReducer } from './favourites/slice';

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filters: filtersReducer,
    brands: brandsReducer,
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
