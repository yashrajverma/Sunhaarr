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
  const token = localStorage.getItem("token");
  const cartId = localStorage.getItem("cart_id"); // Retrieve cart_id from localStorage
  const isJSON = contentType === "application/json";
  const headers = isJSON
    ? {
        "Content-Type": contentType,
        Authorization: `Bearer ${token}`,
        ...(cartId && { "X-Cart-Id": cartId }), // Add cart_id as custom header if present
      }
    : {
        ...(cartId && { "X-Cart-Id": cartId }),
      };

  try {
    const axiosObject = {
      url: `${isExternalAPI ? "" : API_BASE_URL}${url}`,
      method,
      headers,
      data: isJSON && body ? JSON.stringify(body) : body,
    };

    if (method === "DELETE" && body == null) {
      delete axiosObject.data;
    }
    const response = await axios(axiosObject);

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
