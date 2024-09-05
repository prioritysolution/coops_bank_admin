"use client";
import MapLoanProduct from "@/components/orgSetup/mapLoanProduct";
import { useMapLoanProduct } from "./Hooks";
import { useLoanProduct } from "../loanProduct/Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useEffect } from "react";
import { useCreateOrg } from "../createOrg/Hooks";

const MapLoanProductContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getRepayTypeDataApiCall,
    getDurationUnitDataApiCall,
    getOverdueOnDataApiCall,
    getGraceOnDataApiCall,
    loading,
    mapLoanProductForm,
    handleSubmit,
    disableForm,
    disableFormMessage,
    isOverdue,
    isNpa,
    isShareDeduct,
    isDepositDeduct,
  } = useMapLoanProduct();

  const { getOrgListApiCall } = useCreateOrg();

  const { getLoanProductDataApiCall } = useLoanProduct();

  useEffect(() => {
    if (token) {
      getOrgListApiCall();
      getLoanProductDataApiCall();
      getRepayTypeDataApiCall();
      getDurationUnitDataApiCall();
      getOverdueOnDataApiCall();
      getGraceOnDataApiCall();
    }
  }, [token]);

  return (
    <MapLoanProduct
      loading={loading}
      form={mapLoanProductForm}
      handleSubmit={handleSubmit}
      disableForm={disableForm}
      disableFormMessage={disableFormMessage}
      isOverdue={isOverdue}
      isNpa={isNpa}
      isShareDeduct={isShareDeduct}
      isDepositDeduct={isDepositDeduct}
    />
  );
};
export default MapLoanProductContainer;
