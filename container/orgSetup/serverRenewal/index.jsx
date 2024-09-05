"use client";
import { useEffect } from "react";

import { useCreateOrg } from "@/container/orgSetup/createOrg/Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import ServerRenewal from "@/components/orgSetup/serverRenewal";
import { useServerRenewal } from "./Hooks";

const ServerRenewalContainer = () => {
  const token = getSessionStorageData("token");

  const { loading, handleSubmit, serverRenewalForm } = useServerRenewal();

  const { getOrgListApiCall } = useCreateOrg();

  useEffect(() => {
    getOrgListApiCall();
  }, [token]);

  return (
    <ServerRenewal
      loading={loading}
      handleSubmit={handleSubmit}
      form={serverRenewalForm}
    />
  );
};

export default ServerRenewalContainer;
