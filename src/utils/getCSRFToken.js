import { sendRequest } from "./sendRequest";

export default async function getCSRFToken() {
  localStorage.removeItem("csrfToken");

  // Just trigger backend to set cookie
  await sendRequest({ url: "/login" });

  // Grab from cookie after request
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];

  if (csrfToken) {
    localStorage.setItem("csrfToken", csrfToken);
  }
}
