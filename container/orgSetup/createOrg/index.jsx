"use client";
import { useEffect } from "react";

import CreateOrg from "@/components/orgSetup/createOrg";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useCreateOrg } from "./Hooks";

const CreateOrgContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getOrgTypeDataApiCall,
    loading,
    addOrgForm,
    handleSubmit,
    orgListLoading,
    getOrgListApiCall,
    openDialouge,
    setOpenDialouge,
  } = useCreateOrg();

  useEffect(() => {
    if (token) {
      getOrgTypeDataApiCall();
      getOrgListApiCall();
    }
  }, [token]);

  return (
    <CreateOrg
      loading={loading}
      addOrgForm={addOrgForm}
      handleSubmit={handleSubmit}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};

export default CreateOrgContainer;
