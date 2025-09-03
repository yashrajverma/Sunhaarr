import { handleActions } from "redux-actions";

import {
  login,
  logoutUser,
  register,
  user,
  addCartItem,
  getCartItem,
  deleteCartItem,
  updateCartItem,
} from "../routines";

const defaultState = { cart: null, cartItems: [] };

const userReducer = handleActions(
  {
    [user.SUCCESS]: (state, { payload }) => {
      return {};
    },

    [register.SUCCESS]: (state, { payload }) => {
      const data = payload.user;
      delete payload.user;
      const userData = { ...data, ...payload };
      localStorage.setItem("token", payload.token);
      userData.cart !== null &&
        localStorage.setItem("cart_id", userData.cart.id);
      return userData;
    },

    [login.SUCCESS]: (state, { payload }) => {
      const data = payload.user;
      delete payload.user;
      const userData = { ...data, ...payload };
      localStorage.setItem("token", payload.token);
      userData.cart !== null &&
        localStorage.setItem("cart_id", userData.cart.id);

      return userData;
    },

    [logoutUser.SUCCESS]: (state, { payload }) => {
      return {};
    },

    [addCartItem.SUCCESS]: (state, { payload }) => {
      state.cartItems.push(payload.cart.cartItem);
      // Update cart total and num_items
      let total = state.cartItems.reduce(
        (sum, item) => sum + (item.total_price || 0),
        0
      );
      total = Number(total.toFixed(2));
      let num_items = state.cartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          total,
          num_items,
        },
      };
    },

    [updateCartItem.SUCCESS]: (state, { payload }) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.product_id === payload.cartItem.product_id
          ? payload.cartItem
          : item
      );
      // Update cart total and num_items
      let total = updatedCartItems.reduce(
        (sum, item) => sum + (item.total_price || 0),
        0
      );
      total = Number(total.toFixed(2));
      let num_items = updatedCartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cart: {
          ...state.cart,
          total,
          num_items,
        },
      };
    },

    [getCartItem.SUCCESS]: (state, { payload }) => {
      state.cartItems.forEach((element) => {
        element.quantity = payload[element.product_id] || 0;
      });
      // Update cart total and num_items
      let total = state.cartItems.reduce(
        (sum, item) => sum + (item.total_price || 0),
        0
      );
      total = Number(total.toFixed(2));
      let num_items = state.cartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
      );
      return {
        ...state,
        ...payload,
        cart: {
          ...state.cart,
          total,
          num_items,
        },
      };
    },

    [deleteCartItem.SUCCESS]: (state, { payload }) => {
      const updatedCartItems = state.cartItems.filter(
        (cart) => cart.product_id != payload.product_id
      );

      // Update cart total and num_items
      let total = updatedCartItems.reduce(
        (sum, item) => sum + (item.total_price || 0),
        0
      );
      total = Number(total.toFixed(2));
      let num_items = updatedCartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cart: {
          ...state.cart,
          total,
          num_items,
        },
      };
    },
  },
  defaultState
);

export default userReducer;
