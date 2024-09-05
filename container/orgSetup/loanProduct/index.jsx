"use client";

import LoanProduct from "@/components/orgSetup/loanProduct";
import { useLoanProduct } from "./Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useEffect } from "react";

const LoanProductContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getLoanProductTypeDataApiCall,
    getPrincipalGlCrDataApiCall,
    getPrincipalGlOdDataApiCall,
    getInterestGlCrDataApiCall,
    getInterestGlOdDataApiCall,
    getProvissionGlCrDataApiCall,
    getProvissionGlOdDataApiCall,
    getLoanProductDataApiCall,
    loading,
    loanProductForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
  } = useLoanProduct();

  useEffect(() => {
    if (token) {
      getLoanProductTypeDataApiCall();
      getPrincipalGlCrDataApiCall();
      getPrincipalGlOdDataApiCall();
      getInterestGlCrDataApiCall();
      getInterestGlOdDataApiCall();
      getProvissionGlCrDataApiCall();
      getProvissionGlOdDataApiCall();
      getLoanProductDataApiCall();
    }
  }, [token]);

  return (
    <LoanProduct
      loading={loading}
      loanProductForm={loanProductForm}
      handleSubmit={handleSubmit}
      openDialouge={openDialouge}
      setOpenDialouge={setOpenDialouge}
    />
  );
};
export default LoanProductContainer;
