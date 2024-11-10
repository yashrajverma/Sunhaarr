import { combineReducers } from "redux";
import userReducer from "./reducers/user";

export default (reducers) =>
  combineReducers({
    user: userReducer,
  });
