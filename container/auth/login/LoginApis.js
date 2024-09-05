import { doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

// export const getTestAPI = async () => {
//   let url = endPoints.test;
//   let data = {
//     url,
//   };

//   let res = await doGetApiCall(data);
//   return res;
// };

export const adminLoginAPI = async (body) => {
  let url = endPoints.login;
  let data = {
    url,
    bodyData: body,
  };
  let res = await doPostApiCall(data);
  return res;
};
