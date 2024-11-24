import { API_URL } from "./constants";
import { sendRequest } from "./utils/sendRequest";

const Api = {
  getUser() {
    return sendRequest({ url: API_URL.user });
  },

  logout() {
    return sendRequest({ url: API_URL.logout, method: "POST" });
  },

  registerUser(payload) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.user}`,
      body: payload,
    });
  },

  loginUser(payload) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.login}`,
      body: payload,
    });
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

  addCartItem({ productId, quantity }) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
      body: { quantity },
    });
  },

  deleteCartItem({ productId }) {
    return sendRequest({
      method: "DELETE",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
      body: {},
    });
  },

  getCartItem() {
    return sendRequest({
      url: `${API_URL.cart}`,
    });
  },

  addAddress({ payload }) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.address}`,
      body: payload,
    });
  },
};

export default Api;
