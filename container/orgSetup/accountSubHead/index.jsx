"use client";
import { useEffect } from "react";
import AccountSubHead from "@/components/orgSetup/accountSubHead";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useAccountSubHead } from "./Hooks";

const AccountSubHeadContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getAccountSubHeadDataApiCall,
    getAccountHeadDataApiCall,
    loading,
    addAccountSubHeadForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
  } = useAccountSubHead();

  useEffect(() => {
    if (token) {
      getAccountHeadDataApiCall();
      getAccountSubHeadDataApiCall();
    }
  }, [token]);

  return (
    <AccountSubHead
      loading={loading}
      addAccountSubHeadForm={addAccountSubHeadForm}
      handleSubmit={handleSubmit}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};

export default AccountSubHeadContainer;
