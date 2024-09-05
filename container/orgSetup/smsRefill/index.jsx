"use client";
import { useEffect } from "react";

import { useCreateOrg } from "@/container/orgSetup/createOrg/Hooks";
import SmsRefill from "@/components/orgSetup/smsRefill";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useSmsRefill } from "./Hooks";

const SmsRefillContainer = () => {
  const token = getSessionStorageData("token");

  const { smsRefillForm, handleSubmit, loading } = useSmsRefill();

  const { getOrgListApiCall } = useCreateOrg();

  useEffect(() => {
    getOrgListApiCall();
  }, [token]);

  return (
    <SmsRefill
      form={smsRefillForm}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default SmsRefillContainer;
