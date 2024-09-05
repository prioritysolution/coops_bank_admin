import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  accountHeadData: [],
  accountSubHeadData: [],
};
const accountHeadSlice = createSlice({
  name: "accountHead",
  initialState,
  reducers: {
    getAccountHeadData: (state, action) => {
      state.accountHeadData = action.payload;
    },
    getAccountSubHeadData: (state, action) => {
      state.accountSubHeadData = action.payload;
    },
  },
});
export const { getAccountHeadData, getAccountSubHeadData } =
  accountHeadSlice.actions;
export default accountHeadSlice.reducer;
