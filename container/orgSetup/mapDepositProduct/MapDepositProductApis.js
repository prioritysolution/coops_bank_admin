import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getCheckDepositModuleAPI = async (id) => {
  let data = {
    url: endPoints.getCheckDepositModule(id),
  };

  let res = await doGetApiCall(data);
  return res;
};

export const getMapDepositProductAPI = async (type) => {
  let url = null;
  switch (type) {
    case "INTTTYPE":
      url = endPoints.getMapDepositInttTypeData;
      break;
    case "DURATIONUNIT":
      url = endPoints.getMapDepositDurationUnitData;
      break;
    case "FINEON":
      url = endPoints.getMapDepositFineOnData;
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

export const postMapDepositProductAPI = async (bodyData) => {
  let data = {
    url: endPoints.addMapDepositProductData,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
