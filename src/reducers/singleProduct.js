import { handleActions } from "redux-actions";

import { getSingleProducts } from "../routines";

const defaultState = {};
const getSingleProductsReducer = handleActions(
  {
    [getSingleProducts.SUCCESS]: (state, { payload }) => {
      const { product } = payload;
      return product;
    },
  },
  defaultState
);

export default getSingleProductsReducer;
