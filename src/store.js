import { configureStore } from '@reduxjs/toolkit';
import pharmacyReducer from './pharmacy.slice';

export const store = configureStore({
  reducer: {
    pharmacy: pharmacyReducer,
  },
});