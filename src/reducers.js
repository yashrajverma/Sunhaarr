import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import getProductsReducer from "./reducers/product";
import getSingleProductsReducer from "./reducers/singleProduct";
import cartReducer from "./reducers/cart";
import getSearchReducer from "./reducers/search";
import addressReducer from "./reducers/address";

const rootReducer = combineReducers({
  user: userReducer,
  products: getProductsReducer,
  product: getSingleProductsReducer,
  search: getSearchReducer,
  address: addressReducer,
});

export default rootReducer;
