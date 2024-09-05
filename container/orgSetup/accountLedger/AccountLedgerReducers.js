import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  accountLedgerData: [],
};
const accountLedgerSlice = createSlice({
  name: "accountLedger",
  initialState,
  reducers: {
    getAccountLedgerData: (state, action) => {
      state.accountLedgerData = action.payload;
    },
  },
});
export const { getAccountLedgerData } = accountLedgerSlice.actions;
export default accountLedgerSlice.reducer;
