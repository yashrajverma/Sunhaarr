import axios from "axios";
import { API_BASE_URL, HTTP_STATUS_CODES } from "../constants";
axios.defaults.withCredentials = true;
export const sendRequest = async ({
  url,
  method = "GET",
  body = null,
  contentType = "application/json",
  isExternalAPI,
}) => {
  const csrfToken = localStorage.getItem("csrfToken");
  const token = localStorage.getItem("token");
  const isJSON = contentType === "application/json";
  const headers = isJSON
    ? {
        "Content-Type": contentType,
        "XSRF-TOKEN": csrfToken,
        Authorization: `Bearer ${token}`,
      }
    : {};

  try {
    const response = await axios({
      url: `${isExternalAPI ? "" : API_BASE_URL}${url}`,
      method,
      headers,
      xsrfCookieNameCookie: `XSRF-TOKEN=${csrfToken}`,
      data: isJSON && body ? JSON.stringify(body) : body,
    });

    const contentType = response.headers["content-type"];
    const isJSONResponse =
      contentType && contentType.includes("application/json");
    return isJSONResponse ? response.data : null;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;

      if (status === HTTP_STATUS_CODES.FORBIDDEN) {
        throw new Error(status);
        // window.location.reload();
      }
      throw new Error(error.response.statusText || "Unknown error occurred");
    } else {
      console.error("Error: ", error.message);
      throw new Error(error.message);
    }
  }
};
