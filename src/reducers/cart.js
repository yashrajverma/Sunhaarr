import { handleActions } from "redux-actions";

import { addCartItem, deleteCartItem, getCartItem } from "../routines";

const defaultState = [];
const cartReducer = handleActions(
  {
    [addCartItem.SUCCESS]: (state, { payload }) => {
      return { ...payload };
    },

    [getCartItem.SUCCESS]: (state, { payload }) => {
      return payload;
    },

    [deleteCartItem.SUCCESS]: (state, { payload }) => {
      // console.log(state, payload);

      // const cartState=state.cartItems.filter((cart)=>cart.)
      return state;
    },
  },
  defaultState
);

export default cartReducer;
