import { handleActions } from "redux-actions";

import { getSearch } from "../routines";

const defaultState = [];
const getSearchReducer = handleActions(
  {
    [getSearch.SUCCESS]: (state, { payload }) => {
      const { products } = payload;
      return products;
    },
  },
  defaultState
);

export default getSearchReducer;
