import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getOrgBranchDataAPI = async (id) => {
  let data = {
    url: endPoints.getOrgBranchList(id),
  };
  let res = await doGetApiCall(data);
  return res;
};

export const postAddOrgBranchAPI = async (bodyData) => {
  let data = {
    url: endPoints.addOrgBranch,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
