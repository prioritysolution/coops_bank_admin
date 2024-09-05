import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getOrgDataAPI = async (type) => {
  let data = {
    url: type === "OrgList" ? endPoints.orgList : endPoints.getOrgType,
  };
  let res = await doGetApiCall(data);
  return res;
};

export const postAddOrgAPI = async (bodyData) => {
  let data = {
    url: endPoints.addOrg,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
