import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  apiGetSalesCustomer,
  apiPutSalesCustomer,
  apiDeleteSalesCustomers,
} from 'services/SalesService';

export const getCustomer = createAsyncThunk(
  'customerEdit/data/getCustomers',
  async (data) => {
    const response = await apiGetSalesCustomer(data);
    return response.data;
  }
);

export const updateCustomer = async (data) => {
  const response = await apiPutSalesCustomer(data);
  return response.data;
};

export const deleteCustomer = async (data) => {
  const response = await apiDeleteSalesCustomers(data);
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
