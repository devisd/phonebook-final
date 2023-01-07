import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contacts-operations';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const setLoading = state => {
  state.status = 'loading';
  state.error = null;
};

const initialState = {
  items: [],
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: setLoading,
    [deleteContact.pending]: setLoading,
    [addContact.pending]: setLoading,

    [getContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.status = 'resolved';
    },
    [addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.status = 'resolved';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = [...state.items].filter(({ id }) => id !== action.payload);
    },

    [getContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
    [addContact.rejected]: setError,
  },
});

export default contactsSlice;
