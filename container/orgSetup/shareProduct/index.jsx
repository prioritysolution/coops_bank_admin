"use client";

import ShareProduct from "@/components/orgSetup/shareProduct";
import { useShareProduct } from "./Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useEffect } from "react";

const ShareProductContainer = () => {
  const token = getSessionStorageData("token");

  const {
    loading,
    form,
    handleSubmit,
    getMemberTypeDataApiCall,
    getAdmissionGlDataApiCall,
    getShareGlDataApiCall,
    getDividendGlDataApiCall,
  } = useShareProduct();

  useEffect(() => {
    if (token) {
      getMemberTypeDataApiCall();
      getAdmissionGlDataApiCall();
      getShareGlDataApiCall();
      getDividendGlDataApiCall();
    }
  }, [token]);

  return (
    <ShareProduct loading={loading} form={form} handleSubmit={handleSubmit} />
  );
};
export default ShareProductContainer;
