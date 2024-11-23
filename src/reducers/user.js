import { handleActions } from "redux-actions";

import { user } from "../routines";

const defaultState = { token: "", isAuthenticated: false };

const userReducer = handleActions(
  {
    [user.SUCCESS]: (state, { payload }) => {
      const { csrfToken } = payload.userData;

      return { token: csrfToken, isAuthenticated: true };
    },
  },
  defaultState
);

export default userReducer;
