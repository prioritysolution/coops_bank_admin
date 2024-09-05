import { doGetApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getSideBarDataAPI = async () => {
  let data = {
    url: endPoints.sideBarData,
  };
  let res = await doGetApiCall(data);
  return res;
};

export const logoutAPI = async () => {
  let data = {
    url: endPoints.logout,
  };

  let res = await doGetApiCall(data);
  return res;
};
