"use client";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import demoSlice from "./demoReducer"; // <--- Not for use, this is just an example
import loginSlice from "@/container/auth/login/LoginReducer";
import sidebarSlice from "@/container/sidebar/SidebarReducer";
import createOrgSlice from "@/container/orgSetup/createOrg/CreateOrgReducer";
import assignModuleSlice from "@/container/orgSetup/assignModule/AssignModuleReducer";
import accountHeadSlice from "@/container/orgSetup/accountSubHead/AccountSubHeadReducers";
import accountLedgerSlice from "@/container/orgSetup/accountLedger/AccountLedgerReducers";
import assignRoleSlice from "@/container/admin/assignRole/AssignRoleReducers";
import depositProductSlice from "@/container/orgSetup/depositProduct/DepositProductReducers";
import mapDepositProductSlice from "@/container/orgSetup/mapDepositProduct/MapDepositProductReducers";
import loanProductSlice from "@/container/orgSetup/loanProduct/LoanProductReducers";
import mapLoanProductSlice from "@/container/orgSetup/mapLoanProduct/MapLoanProductReducers";
import organisationBranchSlice from "@/container/orgSetup/mapOrganisationBranch/OrganisationBranchReducer";
import shareProductSlice from "@/container/orgSetup/shareProduct/ShareProductReducer";

export const store = configureStore({
  reducer: {
    abc: demoSlice, // <--- Not for use, this is just an example
    login: loginSlice,
    sidebar: sidebarSlice,
    createOrg: createOrgSlice,
    assignModule: assignModuleSlice,
    accountHead: accountHeadSlice,
    accountLedger: accountLedgerSlice,
    assignRole: assignRoleSlice,
    depositProduct: depositProductSlice,
    mapDepositProduct: mapDepositProductSlice,
    loanProduct: loanProductSlice,
    mapLoanProduct: mapLoanProductSlice,
    organisationBranch: organisationBranchSlice,
    shareProduct: shareProductSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
