import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getModuleDataAPI = async (type) => {
  let data = {
    url:
      type === "OrgModuleList"
        ? endPoints.getOrgModuleList
        : endPoints.getModuleType,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postAssignModuleAPI = async (bodyData) => {
  let data = {
    url: endPoints.addModule,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
