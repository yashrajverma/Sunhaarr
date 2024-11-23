import { call, put, takeLatest } from "redux-saga/effects";
import { addCartItem } from "../routines";
import Api from "../api";
export function* addCartItemSaga({ payload }) {
  try {
    yield put(addCartItem.request());
    const { quantity, productId } = payload;
    const cartItem = yield call(Api.addCartItem, { quantity, productId });

    yield put(addCartItem.success({ cartItem }));
  } catch (err) {
    console.log(err);
    yield put(addCartItem.failure(err));
  } finally {
    yield put(addCartItem.fulfill());
  }
}

export function* watchCart() {
  yield takeLatest(addCartItem.TRIGGER, addCartItemSaga);
}
