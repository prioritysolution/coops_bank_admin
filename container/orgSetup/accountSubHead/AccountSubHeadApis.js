import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getAccountHeadDataAPI = async (type) => {
  let data = {
    url:
      type === "AccountHead"
        ? endPoints.getHeadData
        : endPoints.getAccountSubHeadData,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postAccountSubHeadAPI = async (bodyData) => {
  let data = {
    url: endPoints.addAccountSubHead,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
