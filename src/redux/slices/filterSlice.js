import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

export default filterSlice;
