import { fork } from "redux-saga/effects";
import { watchUsers } from "./user";

export default function* rootSaga() {
  yield fork(watchUsers);
}
