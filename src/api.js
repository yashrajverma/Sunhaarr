import { API_URL } from "./constants";
import { sendRequest } from "./utils/sendRequest";

const Api = {
  getUser() {
    return sendRequest({ url: API_URL.getUser });
  },
};

export default Api;
