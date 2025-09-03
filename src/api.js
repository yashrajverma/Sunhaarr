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

  getOrders() {
    return sendRequest({
      url: API_URL.adminOrders,
    });
  },

  updateOrderStatus(orderId, status) {
    return sendRequest({
      method: "PUT",
      url: `${API_URL.adminOrders}/${orderId}`,
      body: { status },
    });
  },

  getDashboardStats() {
    return sendRequest({
      url: API_URL.adminDashboard,
    });
  },

  loginUser(payload) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.login}`,
      body: payload,
    });
  },

  getProducts({ category, pageSize, page, productId }) {
    if (productId) {
      return sendRequest({
        url: `${API_URL.products}/${productId}`,
      });
    }

    if (category) {
      return sendRequest({
        url: `${API_URL.products}/category/${category}?pageSize=${pageSize}&page=${page}`,
      });
    }

    return sendRequest({
      url: `${API_URL.products}?pageSize=${pageSize}&page=${page}`,
    });
  },

  addCartItem({ productId, quantity, cartId }) {
    return sendRequest({
      method: "POST",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
      body: { quantity, cart_id: cartId },
    });
  },

  updateCartItem({ productId, quantity }) {
    console.log("updateCartItem: ", { productId, quantity });
    return sendRequest({
      method: "PUT",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
      body: { quantity },
    });
  },

  deleteCartItem({ productId }) {
    return sendRequest({
      method: "DELETE",
      url: `${API_URL.cart}${API_URL.cartItem}/${productId}`,
    });
  },

  getCartItem() {
    return sendRequest({
      method: "GET",
      url: `${API_URL.cart}`,
    });
  },

  getAddress({ payload }) {
    return sendRequest({
      method: "GET",
      url: `${API_URL.address}`,
    });
  },

  addAddress(payload) {
    console.log("addAddressData: ", payload);
    return sendRequest({
      method: "POST",
      url: `${API_URL.account}${API_URL.address}`,
      body: payload,
    });
  },

  updateAddress({ payload }) {
    return sendRequest({
      method: "PUT",
      url: `${API_URL.account}${API_URL.address}/${payload.id}`,
      body: payload,
    });
  },

  deleteAddress({ payload }) {
    return sendRequest({
      method: "DELETE",
      url: `${API_URL.account}${API_URL.address}/${payload}`,
    });
  },

  getSearch({ query }) {
    return sendRequest({
      url: `${API_URL.search}?query=${query}`,
    });
  },

  // Admin APIs
  addProduct(formData) {
    return sendRequest({
      method: "POST",
      url: API_URL.adminProduct,
      body: formData,
      headers: {
        // Remove Content-Type to let browser set it with boundary for FormData
        "Content-Type": null,
      },
    });
  },

  updateProduct(formData) {
    return sendRequest({
      method: "PUT",
      url: `${API_URL.adminProduct}/${id}`,
      body: formData,
      headers: {
        // Remove Content-Type to let browser set it with boundary for FormData
        "Content-Type": null,
      },
    });
  },

  deleteProduct(id) {
    return sendRequest({
      method: "DELETE",
      url: `${API_URL.adminProduct}/${id}`,
    });
  },
};

export default Api;
