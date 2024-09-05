import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getOrgDetailsAPI = async (id) => {
  let data = {
    url: endPoints.getOrgDetails(id),
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postSetFinancialYearAPI = async (bodyData) => {
  let data = {
    url: endPoints.addFinancialYear,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
