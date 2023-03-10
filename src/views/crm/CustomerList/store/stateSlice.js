import {createSlice} from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'customerList/state',
  initialState: {
    deleteConfirmation: false,
    selectedCustomer: '',
    sortedColumn: () => {},
  },
  reducers: {
    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
  },
});

export const {toggleDeleteConfirmation, setSortedColumn, setSelectedCustomer} =
  stateSlice.actions;

export default stateSlice.reducer;
