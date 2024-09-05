import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getLoanProductDataAPI = async (type) => {
  let url = null;
  switch (type) {
    case "LOANPRODUCTTYPE":
      url = endPoints.getLoanProductTypeData;
      break;
    case "PRINCIPALGLCR":
      url = endPoints.getLoanProductGlData("Prn_Curr");
      break;
    case "PRINCIPALGLOD":
      url = endPoints.getLoanProductGlData("Prn_Od");
      break;
    case "INTTGLCR":
      url = endPoints.getLoanProductGlData("Intt_Curr");
      break;
    case "INTTGLOD":
      url = endPoints.getLoanProductGlData("Intt_Od");
      break;
    case "PROVISSIONGLCR":
      url = endPoints.getLoanProductGlData("Prov_Curr");
      break;
    case "PROVISSIONGLOD":
      url = endPoints.getLoanProductGlData("Prov_Od");
      break;
    case "LOANPRODUCT":
      url = endPoints.getLoanProductData;
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

export const postLoanProductAPI = async (bodyData) => {
  let data = {
    url: endPoints.addLoanProduct,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
