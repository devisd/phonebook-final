import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  removeContact,
  newContact,
} from '../../services/http.services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await getContacts.getList();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue }) {
    try {
      const response = await removeContact.removeCon(id);

      return response.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async function (contactsData) {
    try {
      const data = await newContact.addContact(contactsData);

      return data;
    } catch (error) {}
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const setLoading = state => {
  state.status = 'loading';
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
    error: null,
  },

  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: setLoading,
    [deleteContact.pending]: setLoading,
    [addContact.pending]: setLoading,

    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = [...state.items].filter(({ id }) => id !== action.payload);
    },
    [addContact.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = [...state.items, action.payload];
    },

    [fetchContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
    [addContact.rejected]: setError,
  },
});

export default contactsSlice;
