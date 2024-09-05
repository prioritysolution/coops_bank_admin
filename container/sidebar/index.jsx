"use client";
import { useEffect } from "react";

import Sidebar from "@/components/dashboard/sidebar";
import { useSidebar } from "./Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";

const SidebarContainer = () => {
  const { getSideBarDataApiCall, loader, logOutGetApiCall, logOutLoader } =
    useSidebar();

  const token = getSessionStorageData("token");

  useEffect(() => {
    if (token) {
      getSideBarDataApiCall();
    }
  }, [token]);

  return (
    <Sidebar handleLogOut={logOutGetApiCall} logOutLoader={logOutLoader} />
  );
};

export default SidebarContainer;
