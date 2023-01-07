import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log('GET CONTACTS =>', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      console.log('ADD CONTACT =>', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      console.log('DELETE CONTACT =>', data);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { getContacts, addContact, deleteContact };
