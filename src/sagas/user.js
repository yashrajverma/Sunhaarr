import { call, put, takeLatest } from "redux-saga/effects";
import { user } from "../routines";
import Api from "../api";
export function* getUserSaga() {
  try {
    yield put(user.request());
    const userData = yield call(Api.getUser);
    yield put(user.success({ userData }));
  } catch (err) {
    console.log(err);
    yield put(user.failure(err));
  } finally {
    yield put(user.fulfill());
  }
}
export function* watchUsers() {
  yield takeLatest(user.TRIGGER, getUserSaga);
}
