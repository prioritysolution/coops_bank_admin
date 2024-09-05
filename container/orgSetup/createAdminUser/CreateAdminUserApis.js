import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const postCreateAdminUserAPI = async (bodyData) => {
  let data = {
    url: endPoints.addOrgAdminUser,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
