import { handleActions } from "redux-actions";

import { addCartItem } from "../routines";

const defaultState = [];
const cartReducer = handleActions(
  {
    [addCartItem.SUCCESS]: (state, { payload }) => {
      const { products } = payload;

      return { ...state, products };
    },
  },
  defaultState
);

export default cartReducer;
