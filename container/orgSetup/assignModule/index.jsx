"use client";
import { useEffect } from "react";
import AssignModule from "@/components/orgSetup/assignModule";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useAssignModule } from "./Hooks";
import { useCreateOrg } from "../createOrg/Hooks";

const AssignModuleContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getModuleTypeDataApiCall,
    loading,
    settingList,
    assignModuleForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
    getOrgModuleDataApiCall,
  } = useAssignModule();
  const { getOrgListApiCall } = useCreateOrg();

  useEffect(() => {
    getModuleTypeDataApiCall();
    getOrgListApiCall();
    getOrgModuleDataApiCall();
  }, [token]);

  return (
    <AssignModule
      loading={loading}
      settingList={settingList}
      assignModuleForm={assignModuleForm}
      handleSubmit={handleSubmit}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};

export default AssignModuleContainer;
