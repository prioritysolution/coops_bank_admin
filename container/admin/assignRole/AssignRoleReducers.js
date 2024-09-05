import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  assignRoleData: [],
  assignRoleUserData: [],
};
const assignRoleSlice = createSlice({
  name: "assignRole",
  initialState,
  reducers: {
    getAssignRoleData: (state, action) => {
      state.assignRoleData = action.payload;
    },
    getAssignRoleUserData: (state, action) => {
      state.assignRoleUserData = action.payload;
    },
  },
});
export const { getAssignRoleData, getAssignRoleUserData } =
  assignRoleSlice.actions;
export default assignRoleSlice.reducer;
