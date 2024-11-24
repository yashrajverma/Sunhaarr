import { call, put, takeLatest } from "redux-saga/effects";
import { register, user, login, addAddress, logoutUser } from "../routines";
import Api from "../api";
import storage from "redux-persist/lib/storage";

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

export function* registerUserSaga({ payload }) {
  try {
    yield put(register.request());
    const registerData = yield call(Api.registerUser, payload);
    yield put(register.success(registerData));
  } catch (err) {
    console.log(err);
    yield put(register.failure(err));
  } finally {
    yield put(register.fulfill());
  }
}

export function* loginUserSaga({ payload }) {
  try {
    yield put(login.request());
    const loginData = yield call(Api.loginUser, payload);
    yield put(login.success(loginData));
  } catch (err) {
    console.log(err);
    yield put(login.failure(err));
  } finally {
    yield put(login.fulfill());
  }
}

export function* addAddressUserSaga({ payload }) {
  try {
    yield put(addAddress.request());
    const addAddressData = yield call(Api.addAddress, payload);
    yield put(addAddress.success(addAddressData));
  } catch (err) {
    console.log(err);
    yield put(addAddress.failure(err));
  } finally {
    yield put(addAddress.fulfill());
  }
}

export function* logoutUserSaga() {
  try {
    yield put(logoutUser.request());
    storage.removeItem("persist:root");
    storage.removeItem("token");
    // yield call(Api.logout);
    document.cookie = "access_token=";
    yield put(logoutUser.success());
  } catch (err) {
    console.log(err);
    yield put(logoutUser.failure(err));
  } finally {
    yield put(logoutUser.fulfill());
  }
}

export function* watchUsers() {
  yield takeLatest(user.TRIGGER, getUserSaga);
  yield takeLatest(register.TRIGGER, registerUserSaga);
  yield takeLatest(login.TRIGGER, loginUserSaga);
  yield takeLatest(addAddress.TRIGGER, addAddressUserSaga);
  yield takeLatest(logoutUser.TRIGGER, logoutUserSaga);
}
