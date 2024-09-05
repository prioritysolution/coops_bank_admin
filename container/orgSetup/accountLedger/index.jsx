"use client";
import { useEffect } from "react";

import AccountLedger from "@/components/orgSetup/accountLedger";
import { useAccountSubHead } from "../accountSubHead/Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useAccountLedger } from "./Hooks";

const AccountLedgerContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getAccountLedgerDataApiCall,
    addAccountLedgerForm,
    handleSubmit,
    loading,
    openDialouge,
    setOpenDialouge,
  } = useAccountLedger();

  const { getAccountSubHeadDataApiCall } = useAccountSubHead();

  useEffect(() => {
    if (token) {
      getAccountSubHeadDataApiCall();
      getAccountLedgerDataApiCall();
    }
  }, [token]);
  return (
    <AccountLedger
      addAccountLedgerForm={addAccountLedgerForm}
      handleSubmit={handleSubmit}
      loading={loading}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};

export default AccountLedgerContainer;
