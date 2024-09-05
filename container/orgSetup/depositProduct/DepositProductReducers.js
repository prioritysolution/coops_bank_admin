import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  depositProductTypeData: [],
  depositTypeData: [],
  principalGlData: [],
  inttGlData: [],
  provissionGlData: [],
  depositProductData: [],
};
const depositProductSlice = createSlice({
  name: "depositProduct",
  initialState,
  reducers: {
    getDepositProductTypeData: (state, action) => {
      state.depositProductTypeData = action.payload;
    },
    getDepositTypeData: (state, action) => {
      state.depositTypeData = action.payload;
    },
    getPrincipalGlData: (state, action) => {
      state.principalGlData = action.payload;
    },
    getInttGlData: (state, action) => {
      state.inttGlData = action.payload;
    },
    getProvissionGlData: (state, action) => {
      state.provissionGlData = action.payload;
    },
    getDepositProductData: (state, action) => {
      state.depositProductData = action.payload;
    },
  },
});
export const {
  getDepositProductTypeData,
  getDepositTypeData,
  getPrincipalGlData,
  getInttGlData,
  getProvissionGlData,
  getDepositProductData,
} = depositProductSlice.actions;
export default depositProductSlice.reducer;
