import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice'; // Ensure this import is correct

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;



