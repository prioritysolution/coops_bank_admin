import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const postSmsRefillAPI = async (bodyData) => {
  let data = {
    url: endPoints.addSmsData,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
