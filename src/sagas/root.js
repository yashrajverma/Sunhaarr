import { fork } from "redux-saga/effects";
import { watchUsers } from "./user";
import { watchProducts } from "./product";

export default function* rootSaga() {
  yield fork(watchUsers);
  yield fork(watchProducts);
}
