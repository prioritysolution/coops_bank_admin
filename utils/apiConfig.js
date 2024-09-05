const makeApiCall = async (method, data) => {
  try {
    let token = null;
    if (typeof window !== "undefined") {
      token = sessionStorage.getItem("token");
    }

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (token) {
      headers.Authorization = "Bearer " + token;
    }

    const reqstValues = {
      method: method,
      headers: headers,
    };

    if (data.bodyData) {
      reqstValues.body = JSON.stringify(data.bodyData);
    }

    const response = await fetch(data?.url, reqstValues);

    if (response.status === 401) {
      // Handle unauthorized access
      sessionStorage.clear();
    }

    const result = await response.json();

    if (result?.token) {
      sessionStorage.setItem("token", result?.token);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const doGetApiCall = (data) => makeApiCall("GET", data);
export const doPostApiCall = (data) => makeApiCall("POST", data);
export const doDeleteApiCall = (data) => makeApiCall("DELETE", data);
export const doPutApiCall = (data) => makeApiCall("PUT", data);
