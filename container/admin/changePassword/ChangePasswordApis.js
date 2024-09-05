import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const postChangePasswordAPI = async (bodyData) => {
  let data = {
    url: endPoints.changeUsePassword,
    bodyData,
  };

  let res = doPostApiCall(data);
  return res;
};
