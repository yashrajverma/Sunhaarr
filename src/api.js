import { API_URL } from "./constants";
import { sendRequest } from "./utils/sendRequest";

const Api = {
  getUser() {
    return sendRequest({ url: API_URL.user });
  },

  getProducts({ productId, category }) {
    if (category) {
      return sendRequest({
        url: `${API_URL.products}/category/${category}`,
      });
    } else if (productId) {
      return sendRequest({
        url: `${API_URL.products}/${productId}`,
      });
    }
    return sendRequest({ url: `${API_URL.products}` });
  },

  addCartItem({ productId, sessionId, quantity, cartId }) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
      body: { quantity },
    });
  },
};

export default Api;
