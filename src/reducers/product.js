import { handleActions } from "redux-actions";

import { getProducts } from "../routines";

const defaultState = {
  products: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
  },
};
const getProductsReducer = handleActions(
  {
    [getProducts.SUCCESS]: (state, { payload }) => {
      const {
        products: { data, pagination },
      } = payload;

      return { ...state, products: data, pagination };
    },
  },
  defaultState
);

export default getProductsReducer;
