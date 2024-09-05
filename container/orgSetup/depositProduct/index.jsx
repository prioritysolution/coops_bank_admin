"use client";

import { useEffect } from "react";
import DepositProduct from "@/components/orgSetup/depositProduct";
import { useDepositProduct } from "./Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";

const DepositProductContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getDepositProductTypeDataApiCall,
    getDepositTypeDataApiCall,
    getPrincipalGlDataApiCall,
    getInttGlDataApiCall,
    getProvissionGlDataApiCall,
    getDepositProductDataApiCall,
    loading,
    depositProductForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
  } = useDepositProduct();

  useEffect(() => {
    getDepositProductTypeDataApiCall();
    getDepositTypeDataApiCall();
    getPrincipalGlDataApiCall();
    getInttGlDataApiCall();
    getProvissionGlDataApiCall();
    getDepositProductDataApiCall();
  }, [token]);

  return (
    <DepositProduct
      loading={loading}
      depositProductForm={depositProductForm}
      handleSubmit={handleSubmit}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};
export default DepositProductContainer;
