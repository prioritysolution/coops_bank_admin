import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  branchData: [],
};
const organisationBranchSlice = createSlice({
  name: "organisationBranch",
  initialState,
  reducers: {
    getOrganisationBranchData: (state, action) => {
      state.branchData = action.payload;
    },
  },
});
export const { getOrganisationBranchData } = organisationBranchSlice.actions;
export default organisationBranchSlice.reducer;
