import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../routines";
import Api from "../api";
export function* getUserSaga() {
  try {
    yield put(getUser.request());
    const userData = yield call(Api.getUser);
    yield put(getUser.success({ userData }));
  } catch (err) {
    console.log(err);
    yield put(getUser.failure(err));
  } finally {
    yield put(getUser.fulfill());
  }
}
export function* watchUsers() {
  yield takeLatest(getUser.TRIGGER, getUserSaga);
}
