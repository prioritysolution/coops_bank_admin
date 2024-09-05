import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getMemberDataAPI = async (type) => {
  let url = null;
  switch (type) {
    case "MEMBERTYPE":
      url = endPoints.getMemberTypeData;
      break;
    case "ADMISSIONGL":
      url = endPoints.getMemberGlData("Adm");
      break;
    case "SHAREGL":
      url = endPoints.getMemberGlData("Shr");
      break;
    case "DIVIDENDGL":
      url = endPoints.getMemberGlData("Div");
      break;
    default:
      url = null;
  }

  let data = {
    url,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postShareProductAPI = async (bodyData) => {
  let data = {
    url: endPoints.addShareProduct,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
