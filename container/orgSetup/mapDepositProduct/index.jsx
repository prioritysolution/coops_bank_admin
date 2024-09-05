"use client";

import { useEffect } from "react";
import MapDepositProduct from "@/components/orgSetup/mapDepositProduct";
import { useCreateOrg } from "@/container/orgSetup/createOrg/Hooks";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useMapDepositProduct } from "./Hooks";
import { useDepositProduct } from "../depositProduct/Hooks";

const MapDepositProductContainer = () => {
  const token = getSessionStorageData("token");

  const {
    getInttTypeDataApiCall,
    getDurationUnitDataApiCall,
    getFineOnDataApiCall,
    loading,
    mapDepositProductForm,
    handleSubmit,
    disableForm,
    disableFormMessage,
  } = useMapDepositProduct();

  const { getOrgListApiCall } = useCreateOrg();

  const { getDepositProductDataApiCall } = useDepositProduct();

  useEffect(() => {
    if (token) {
      getOrgListApiCall();
      getDepositProductDataApiCall();
      getInttTypeDataApiCall();
      getDurationUnitDataApiCall();
      getFineOnDataApiCall();
    }
  }, [token]);

  return (
    <MapDepositProduct
      loading={loading}
      form={mapDepositProductForm}
      handleSubmit={handleSubmit}
      disableForm={disableForm}
      disableFormMessage={disableFormMessage}
    />
  );
};
export default MapDepositProductContainer;
