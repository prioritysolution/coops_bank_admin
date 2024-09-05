import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  moduleTypeData: [],
  orgModuleData: [],
};
const assignModuleSlice = createSlice({
  name: "assignModule",
  initialState,
  reducers: {
    getModuleTypeData: (state, action) => {
      state.moduleTypeData = action.payload;
    },
    getOrgModuleData: (state, action) => {
      state.orgModuleData = action.payload;
    },
  },
});
export const { getModuleTypeData, getOrgModuleData } =
  assignModuleSlice.actions;
export default assignModuleSlice.reducer;
