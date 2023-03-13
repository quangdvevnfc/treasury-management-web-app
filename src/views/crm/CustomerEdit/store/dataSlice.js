import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  apiDeleteCrmCustomer,
  apiGetCrmCustomer,
  apiUpdateCrmCustomer,
} from 'services/CrmService';

export const getCustomer = createAsyncThunk(
  'customerEdit/data/getCustomers',
  async (data) => {
    const response = await apiGetCrmCustomer(data);
    return response.data;
  }
);

export const updateCustomer = async (data) => {
  const response = await apiUpdateCrmCustomer(data);
  return response.data;
};

export const deleteCustomer = async (data) => {
  const response = await apiDeleteCrmCustomer(data);
  return response.data;
};

const dataSlice = createSlice({
  name: 'customerEdit/data',
  initialState: {
    loading: false,
    customerData: [],
  },
  reducers: {},
  extraReducers: {
    [getCustomer.fulfilled]: (state, action) => {
      state.customerData = action.payload;
      state.loading = false;
    },
    [getCustomer.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default dataSlice.reducer;
