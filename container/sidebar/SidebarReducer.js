import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  sideBarData: [],
};
const sideBarSlice = createSlice({
  name: "sideBarData",
  initialState,
  reducers: {
    getSideBarData: (state, action) => {
      state.sideBarData = action.payload;
    },
  },
});
export const { getSideBarData } = sideBarSlice.actions;
export default sideBarSlice.reducer;
