import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getDepositProductDataAPI = async (type) => {
  let url = null;
  switch (type) {
    case "DEPOSITPRODUCTTYPE":
      url = endPoints.getDepositProductType;
      break;
    case "DEPOSITTYPE":
      url = endPoints.getDepositType;
      break;
    case "PRINCIPALGL":
      url = endPoints.getDepositGlData("Prn");
      break;
    case "INTTGL":
      url = endPoints.getDepositGlData("Intt");
      break;
    case "PROVISSIONGL":
      url = endPoints.getDepositGlData("Prov");
      break;
    case "DEPOSITPRODUCT":
      url = endPoints.getDepositProductData;
      break;
    default:
      url = null;
  }
  let data = {
    url,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postDepositProductAPI = async (bodyData) => {
  let data = {
    url: endPoints.addDepositProduct,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
