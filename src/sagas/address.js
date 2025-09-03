import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../routines";
import Api from "../api";

export function* getAddressSaga() {
  try {
    yield put(getAddress.request());
    const { address } = yield call(Api.getAddress);
    yield put(getAddress.success({ address }));
  } catch (err) {
    console.log(err);
    yield put(getAddress.failure(err));
  } finally {
    yield put(getAddress.fulfill());
  }
}

export function* addAddressSaga({ payload }) {
  try {
    yield put(addAddress.request());
    const { address } = yield call(Api.addAddress, payload);
    yield put(addAddress.success({ address }));
  } catch (err) {
    console.log(err);
    yield put(addAddress.failure(err));
  } finally {
    yield put(addAddress.fulfill());
  }
}

export function* updateAddressSaga({ payload }) {
  try {
    yield put(updateAddress.request());

    const { address } = yield call(Api.updateAddress, {
      payload,
    });
    yield put(updateAddress.success({ address }));
  } catch (err) {
    console.log(err);
    yield put(updateAddress.failure(err));
  } finally {
    yield put(updateAddress.fulfill());
  }
}

export function* deleteAddressSaga({ payload }) {
  try {
    yield put(deleteAddress.request());

    const { address } = yield call(Api.deleteAddress, {
      payload,
    });

    yield put(deleteAddress.success({ addressId: address.id }));
  } catch (err) {
    console.log(err);
    yield put(deleteAddress.failure(err));
  } finally {
    yield put(deleteAddress.fulfill());
  }
}

export function* watchAddress() {
  yield takeLatest(getAddress.TRIGGER, getAddressSaga);
  yield takeLatest(addAddress.TRIGGER, addAddressSaga);
  yield takeLatest(updateAddress.TRIGGER, updateAddressSaga);
  yield takeLatest(deleteAddress.TRIGGER, deleteAddressSaga);
}
