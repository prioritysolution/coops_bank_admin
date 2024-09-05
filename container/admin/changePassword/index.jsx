"use client";

import ChangePassword from "@/components/admin/changePassword";
import { useChangePassword } from "./Hooks";

const ChangePasswordContainer = () => {
  const { changePasswordForm, handleSubmit, loading } = useChangePassword();

  return (
    <ChangePassword
      form={changePasswordForm}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default ChangePasswordContainer;
