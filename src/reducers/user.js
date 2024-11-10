import { handleActions } from "redux-actions";

import { getUser } from "../routines";

const defaultState = { token: "", isAuthenticated: false };

const userReducer = handleActions(
  {
    [getUser.SUCCESS]: (state, payload) => state,
  },
  defaultState
);

export default userReducer;
