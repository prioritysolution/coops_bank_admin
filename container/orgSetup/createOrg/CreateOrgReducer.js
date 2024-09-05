import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  orgTypeData: [],
  orgData: [],
};
const createOrgSlice = createSlice({
  name: "createOrg",
  initialState,
  reducers: {
    getOrgType: (state, action) => {
      state.orgTypeData = action.payload;
    },
    getOrgData: (state, action) => {
      state.orgData = action.payload;
    },
  },
});
export const { getOrgType, getOrgData } = createOrgSlice.actions;
export default createOrgSlice.reducer;
