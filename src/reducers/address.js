import { handleActions } from "redux-actions";

import {
  updateAddress,
  addAddress,
  getAddress,
  deleteAddress,
} from "../routines";

const defaultState = [];
const addressReducer = handleActions(
  {
    [addAddress.SUCCESS]: (state, { payload }) => {
      const { address } = payload;

      return [...state, address];
    },
    [updateAddress.SUCCESS]: (state, { payload }) => {
      const { address } = payload;

      return state.map((addr) => (addr.id === address.id ? address : addr));
    },
    [getAddress.SUCCESS]: (state, { payload }) => {
      const { address } = payload;

      return [...state, address];
    },
    [deleteAddress.SUCCESS]: (state, { payload }) => {
      const { addressId } = payload;
      return state.filter((addr) => addr.id !== addressId);
    },
  },
  defaultState
);

export default addressReducer;
