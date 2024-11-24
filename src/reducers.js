import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import getProductsReducer from "./reducers/product";
import getSingleProductsReducer from "./reducers/singleProduct";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  user: userReducer,
  products: getProductsReducer,
  product: getSingleProductsReducer,
});

export default rootReducer;
