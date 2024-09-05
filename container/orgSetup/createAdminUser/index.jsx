"use client";
import { useEffect } from "react";

import { useCreateOrg } from "@/container/orgSetup/createOrg/Hooks";
import CreateAdminUser from "@/components/orgSetup/createAdminUser";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useCreateAdminUser } from "./Hooks";
import { useMapOrgBranch } from "../mapOrganisationBranch/Hooks";

const CreateAdminUserContainer = () => {
  const token = getSessionStorageData("token");

  const { loading, createAdminUserForm, handleSubmit, orgId } =
    useCreateAdminUser();

  const { getOrgListApiCall } = useCreateOrg();

  const { getOrgBranchListApiCall } = useMapOrgBranch();

  useEffect(() => {
    getOrgListApiCall();
  }, [token]);

  useEffect(() => {
    if (token && orgId.length > 0) {
      getOrgBranchListApiCall(orgId);
    }
  }, [token, orgId]);

  return (
    <CreateAdminUser
      loading={loading}
      form={createAdminUserForm}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateAdminUserContainer;
