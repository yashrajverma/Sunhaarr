import { API_BASE_URL, HTTP_STATUS_CODES } from "../constants";

export const sendRequest = ({
  url,
  method = "GET",
  body = null,
  contentType = "application/json",
  isExternalAPI,
}) => {
  const headers = {};
  const isJSON = contentType === "application/json";

  if (isJSON) {
    headers["Content-Type"] = contentType;
  }

  return fetch(`${isExternalAPI ? "" : API_BASE_URL}${url}`, {
    method,
    headers,
    mode: "no-cors",
    body: body && isJSON ? JSON.stringify(body) : body,
  })
    .then((response) => {
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        const isJSON = contentType && contentType.includes("application/json");
        return isJSON ? response.json() : Promise.resolve();
      } else {
        if (response.status === HTTP_STATUS_CODES.FORBIDDEN) {
          throw new Error(response.status);
          // window.location.reload();
        }
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error: ", error.message);
      throw new Error(error.message);
    });
};
