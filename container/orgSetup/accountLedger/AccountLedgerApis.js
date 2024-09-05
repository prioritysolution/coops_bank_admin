import { doGetApiCall, doPostApiCall } from "@/utils/apiConfig";
import { endPoints } from "@/utils/endPoints";

export const getAccountLedgerDataAPI = async () => {
  let data = {
    url: endPoints.getAccountLedgerData,
  };

  let res = await doGetApiCall(data);
  return res;
};

export const postAccountLedgerAPI = async (bodyData) => {
  let data = {
    url: endPoints.addAccountLedger,
    bodyData,
  };

  let res = await doPostApiCall(data);
  return res;
};
