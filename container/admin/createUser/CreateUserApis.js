import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const postCreateUserAPI = async (bodyData) => {
  let data = {
    url: endPoints.addUser,
    bodyData,
  };

  let res = doPostApiCall(data);
  return res;
};
