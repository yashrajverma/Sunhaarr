import { handleActions } from "redux-actions";

import {
  addAddress,
  login,
  logoutUser,
  register,
  user,
  addCartItem,
  getCartItem,
  deleteCartItem,
} from "../routines";

const defaultState = {};

const userReducer = handleActions(
  {
    [user.SUCCESS]: (state, { payload }) => {
      return {};
    },

    [register.SUCCESS]: (state, { payload }) => {
      return payload;
    },

    [login.SUCCESS]: (state, { payload }) => {
      const data = payload.user;
      delete payload.user;
      const userData = { ...data, ...payload };
      localStorage.setItem("token", payload.token);

      return userData;
    },

    [logoutUser.SUCCESS]: (state, { payload }) => {
      return {};
    },

    [addAddress.SUCCESS]: (state, { payload }) => {
      return payload;
    },

    [addCartItem.SUCCESS]: (state, { payload }) => {
      state.cartItems.push(payload.cart.cartItem);
      return { ...state };
    },

    [getCartItem.SUCCESS]: (state, { payload }) => {
      return { ...state, ...payload };
    },

    [deleteCartItem.SUCCESS]: (state, { payload }) => {
      const updatedCartItems = state.cartItems.filter(
        (cart) => cart.product_id == payload.product_id
      );

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },
  },
  defaultState
);

export default userReducer;
