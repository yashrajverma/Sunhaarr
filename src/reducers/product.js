import { handleActions } from "redux-actions";

import { getProducts } from "../routines";

const defaultState = [];
const getProductsReducer = handleActions(
  {
    [getProducts.SUCCESS]: (state, { payload }) => {
      const { products } = payload;

      return { ...state, products };
    },
  },
  defaultState
);

export default getProductsReducer;
