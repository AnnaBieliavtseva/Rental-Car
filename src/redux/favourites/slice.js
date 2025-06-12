import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite(state, action) {
      const id = action.payload;
      const index = state.items.indexOf(id);
      if (index === -1) {
        state.items.push(id);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const { toggleFavourite } = favouritesSlice.actions;
