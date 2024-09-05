"use client";
import { memo, useEffect } from "react";
import { useRouter } from "next/navigation";

import Login from "@/components/auth/login";
import { useLogin } from "./Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";

const LoginContainer = () => {
  const router = useRouter();

  const token = getSessionStorageData("token");

  const { getTestApiCall, loginForm, loading, handleLoginSubmit } = useLogin();

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  useEffect(() => {
    // getTestApiCall();
  }, []);

  return (
    <Login
      form={loginForm}
      loading={loading}
      handleSubmit={handleLoginSubmit}
    />
  );
};

const memoizedHook = memo(LoginContainer);
export default memoizedHook;
