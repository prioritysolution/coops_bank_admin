import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getAssignRoleAPI = async (type) => {
  let data = {
    url: type === "USER" ? endPoints.getRoleAssignUser : endPoints.getRoleList,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postAssignRoleAPI = async (bodyData) => {
  let data = {
    url: endPoints.addAdminModule,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
