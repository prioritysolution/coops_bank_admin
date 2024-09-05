"use client";

import MapOrganisationBranch from "@/components/orgSetup/mapOrganisationBranch";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useEffect } from "react";
import { useCreateOrg } from "../createOrg/Hooks";
import { useMapOrgBranch } from "./Hooks";

const MapOrganisationBranchContainer = () => {
  const token = getSessionStorageData("token");

  const { getOrgListApiCall } = useCreateOrg();

  const { loading, mapOrgBranchForm, handleSubmit } = useMapOrgBranch();

  useEffect(() => {
    getOrgListApiCall();
  }, [token]);

  return (
    <MapOrganisationBranch
      loading={loading}
      form={mapOrgBranchForm}
      handleSubmit={handleSubmit}
    />
  );
};
export default MapOrganisationBranchContainer;
