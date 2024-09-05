import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  memberTypeData: [],
  admissionGlData: [],
  shareGlData: [],
  dividendGlData: [],
};
const ShareProductSlice = createSlice({
  name: "shareProduct",
  initialState,
  reducers: {
    getMemberTypeData: (state, action) => {
      state.memberTypeData = action.payload;
    },
    getAdmissionGlData: (state, action) => {
      state.admissionGlData = action.payload;
    },
    getShareGlData: (state, action) => {
      state.shareGlData = action.payload;
    },
    getDividendGlData: (state, action) => {
      state.dividendGlData = action.payload;
    },
  },
});
export const {
  getMemberTypeData,
  getAdmissionGlData,
  getShareGlData,
  getDividendGlData,
} = ShareProductSlice.actions;
export default ShareProductSlice.reducer;
