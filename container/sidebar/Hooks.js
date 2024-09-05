"use client";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import { getSideBarDataAPI, logoutAPI } from "./SidebarApis";
import { getSideBarData } from "./SidebarReducer";
import { useRouter } from "next/navigation";

export const useSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [loader, setLoader] = useState(false);
  const [logOutLoader, setLogOutLoader] = useState(false);

  // logout get api call
  const logOutGetApiCall = async () => {
    setLogOutLoader(true);
    try {
      const res = await logoutAPI();
      if (res.message === "Logout Successfull") {
        router.push("/login");
        sessionStorage.clear();
        toast.success(`Logged Out Successfully`);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLogOutLoader(false);
    }
  };

  //sideBarData get Api call

  const getSideBarDataApiCall = async () => {
    setLoader(true);
    try {
      const res = await getSideBarDataAPI();
      if (res.message === "Data Found") {
        dispatch(getSideBarData(res.Data));
      } else {
        dispatch(getSideBarData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getSideBarData([]));
    } finally {
      setLoader(false);
    }
  };
  return {
    getSideBarDataApiCall,
    loader,
    logOutGetApiCall,
    logOutLoader,
  };
};
