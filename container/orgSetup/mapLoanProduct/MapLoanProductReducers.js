import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  repayTypeData: [],
  durationUnitData: [],
  overdueOnData: [],
  graceOnData: [],
  depositProductData: [],
};
const mapLoanProductSlice = createSlice({
  name: "mapDepositProduct",
  initialState,
  reducers: {
    getRepayTypeData: (state, action) => {
      state.repayTypeData = action.payload;
    },
    getDurationUnitData: (state, action) => {
      state.durationUnitData = action.payload;
    },
    getOverdueOnData: (state, action) => {
      state.overdueOnData = action.payload;
    },
    getGraceOnData: (state, action) => {
      state.graceOnData = action.payload;
    },
    getDepositProductData: (state, action) => {
      state.depositProductData = action.payload;
    },
  },
});
export const {
  getRepayTypeData,
  getDurationUnitData,
  getOverdueOnData,
  getGraceOnData,
  getDepositProductData,
} = mapLoanProductSlice.actions;
export default mapLoanProductSlice.reducer;
