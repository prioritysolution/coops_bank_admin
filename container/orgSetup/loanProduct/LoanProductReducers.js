import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loanProductTypeData: [],
  principalGlCrData: [],
  principalGlOdData: [],
  inttGlCrData: [],
  inttGlOdData: [],
  provissionGlCrData: [],
  provissionGlOdData: [],
  loanProductData: [],
};
const loanProductSlice = createSlice({
  name: "loanProduct",
  initialState,
  reducers: {
    getLoanProductTypeData: (state, action) => {
      state.loanProductTypeData = action.payload;
    },
    getPrincipalGlCrData: (state, action) => {
      state.principalGlCrData = action.payload;
    },
    getPrincipalGlOdData: (state, action) => {
      state.principalGlOdData = action.payload;
    },
    getInttGlCrData: (state, action) => {
      state.inttGlCrData = action.payload;
    },
    getInttGlOdData: (state, action) => {
      state.inttGlOdData = action.payload;
    },
    getProvissionGlCrData: (state, action) => {
      state.provissionGlCrData = action.payload;
    },
    getProvissionGlOdData: (state, action) => {
      state.provissionGlOdData = action.payload;
    },
    getLoanProductData: (state, action) => {
      state.loanProductData = action.payload;
    },
  },
});
export const {
  getLoanProductTypeData,
  getPrincipalGlCrData,
  getPrincipalGlOdData,
  getInttGlCrData,
  getInttGlOdData,
  getProvissionGlCrData,
  getProvissionGlOdData,
  getLoanProductData,
} = loanProductSlice.actions;
export default loanProductSlice.reducer;
