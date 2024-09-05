"use client";
import { useEffect } from "react";
import AssignRole from "@/components/admin/assignRole";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useAssignRole } from "./Hooks";
import { useRouter } from "next/navigation";

const AssignRoleContainer = () => {
  const router = useRouter();
  const token = getSessionStorageData("token");

  const {
    getAssignRoleDataApiCall,
    getAssignRoleUserDataApiCall,
    userId,
    roleAssignList,
    handleChangeUser,
    assignRoleForm,
    manageOrgOpen,
    adminOpen,
    manageOrgValue,
    adminValue,
    setManageOrgOpen,
    setAdminOpen,
    handleManageOrgValueChange,
    handleAdminValueChange,
    handleSubmit,
    loading,
  } = useAssignRole();

  useEffect(() => {
    if (token) {
      getAssignRoleUserDataApiCall();
      getAssignRoleDataApiCall();
    }
  }, [token, router]);

  return (
    <AssignRole
      userId={userId}
      roleAssignList={roleAssignList}
      handleChangeUser={handleChangeUser}
      form={assignRoleForm}
      manageOrgOpen={manageOrgOpen}
      adminOpen={adminOpen}
      manageOrgValue={manageOrgValue}
      adminValue={adminValue}
      setManageOrgOpen={setManageOrgOpen}
      setAdminOpen={setAdminOpen}
      handleManageOrgValueChange={handleManageOrgValueChange}
      handleAdminValueChange={handleAdminValueChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default AssignRoleContainer;
