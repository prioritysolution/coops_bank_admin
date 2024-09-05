import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const postServerRenewalAPI = async (bodyData) => {
  let data = {
    url: endPoints.addRentalData,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
