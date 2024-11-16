import { API_URL } from "./constants";
import { sendRequest } from "./utils/sendRequest";

const Api = {
  getUser() {
    return sendRequest({ url: API_URL.getUser });
  },

  getProducts({ productId, category }) {
    if (category) {
      return sendRequest({
        url: `${API_URL.getProducts}/category/${category}`,
      });
    } else if (productId) {
      return sendRequest({
        url: `${API_URL.getProducts}/${productId}`,
      });
    }
    return sendRequest({ url: `${API_URL.getProducts}` });
  },
};

export default Api;
