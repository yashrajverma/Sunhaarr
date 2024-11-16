import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import getProductsReducer from "./reducers/product";
import getSingleProductsReducer from "./reducers/singleProduct";

export default (reducers) =>
  combineReducers({
    user: userReducer,
    products: getProductsReducer,
    product: getSingleProductsReducer,
  });
