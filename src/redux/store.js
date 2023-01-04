import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const { filter } = filterSlice.actions;
