import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getCheckLoanModuleAPI = async (id) => {
  let data = {
    url: endPoints.getCheckLoanModule(id),
  };

  let res = await doGetApiCall(data);
  return res;
};

export const getMapLoanProductAPI = async (type) => {
  let url = null;
  switch (type) {
    case "REPAYTYPE":
      url = endPoints.getMapLoanRepayTypeData;
      break;
    case "DURATIONUNIT":
      url = endPoints.getMapLoanDurUnitData;
      break;
    case "OVERDUEON":
      url = endPoints.getMapLoanOverdueOnData;
      break;
    case "GRACEON":
      url = endPoints.getMapLoanGraceOnData;
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

export const getMapLoanDepositProductDataAPI = async (id) => {
  let data = {
    url: endPoints.getMapLoanDepositProductData(id),
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postMapLoanProductAPI = async (bodyData) => {
  let data = {
    url: endPoints.addMapLoanProduct,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
