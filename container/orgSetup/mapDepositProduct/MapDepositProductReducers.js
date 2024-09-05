import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  inttTypeData: [],
  durationUnitData: [],
  fineOnData: [],
};
const mapDepositProductSlice = createSlice({
  name: "mapDepositProduct",
  initialState,
  reducers: {
    getInttTypeData: (state, action) => {
      state.inttTypeData = action.payload;
    },
    getDurationUnitData: (state, action) => {
      state.durationUnitData = action.payload;
    },
    getFineOnData: (state, action) => {
      state.fineOnData = action.payload;
    },
  },
});
export const { getInttTypeData, getDurationUnitData, getFineOnData } =
  mapDepositProductSlice.actions;
export default mapDepositProductSlice.reducer;
