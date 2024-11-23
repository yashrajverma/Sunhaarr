import { fork } from "redux-saga/effects";
import { watchUsers } from "./user";
import { watchProducts } from "./product";
import { watchCart } from "./cart";

export default function* rootSaga() {
  yield fork(watchUsers);
  yield fork(watchProducts);
  yield fork(watchCart);
}
