import { call, put, takeLatest } from "redux-saga/effects";
import { addCartItem, deleteCartItem, getCartItem } from "../routines";
import Api from "../api";
export function* addCartItemSaga({ payload }) {
  try {
    yield put(addCartItem.request());
    const { quantity, productId } = payload;
    const cart = yield call(Api.addCartItem, { quantity, productId });

    yield put(addCartItem.success({ cart }));
  } catch (err) {
    console.log(err);
    yield put(addCartItem.failure(err));
  } finally {
    yield put(addCartItem.fulfill());
  }
}

export function* getCartItemSaga({ payload }) {
  try {
    yield put(getCartItem.request());
    const cartItem = yield call(Api.getCartItem);

    yield put(getCartItem.success(cartItem));
  } catch (err) {
    console.log(err);
    yield put(getCartItem.failure(err));
  } finally {
    yield put(getCartItem.fulfill());
  }
}

export function* deleteCartItemSaga({ payload }) {
  try {
    yield put(deleteCartItem.request());
    const cartItem = yield call(Api.deleteCartItem, { productId: payload });

    yield put(deleteCartItem.success(cartItem));
  } catch (err) {
    console.log(err);
    yield put(deleteCartItem.failure(err));
  } finally {
    yield put(deleteCartItem.fulfill());
  }
}

export function* watchCart() {
  yield takeLatest(addCartItem.TRIGGER, addCartItemSaga);
  yield takeLatest(getCartItem.TRIGGER, getCartItemSaga);
  yield takeLatest(deleteCartItem.TRIGGER, deleteCartItemSaga);
}
