"use client";
import { useEffect } from "react";

import { useCreateOrg } from "@/container/orgSetup/createOrg/Hooks";
import SetFinancialYear from "@/components/orgSetup/setFinancialYear";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useSetFinancialYear } from "./Hooks";

const SetFinancialYearContainer = () => {
  const token = getSessionStorageData("token");

  const {
    endDate,
    disableDateInput,
    setFinancialYearForm,
    handleSubmit,
    loading,
  } = useSetFinancialYear();

  const { getOrgListApiCall } = useCreateOrg();

  useEffect(() => {
    getOrgListApiCall();
  }, [token]);

  return (
    <SetFinancialYear
      endDate={endDate}
      disableDateInput={disableDateInput}
      form={setFinancialYearForm}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default SetFinancialYearContainer;
