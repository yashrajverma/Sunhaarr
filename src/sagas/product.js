import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts, getSingleProducts } from "../routines";
import Api from "../api";
export function* getProductsSaga({ payload }) {
  try {
    yield put(getProducts.request());
    const category = payload;
    const { products } = yield call(Api.getProducts, category);
    yield put(getProducts.success({ products }));
  } catch (err) {
    console.log(err);
    yield put(getProducts.failure(err));
  } finally {
    yield put(getProducts.fulfill());
  }
}

export function* getSingleProductsSaga({ payload }) {
  try {
    yield put(getSingleProducts.request());
    const productId = payload;
    const { product } = yield call(Api.getProducts, productId);
    yield put(getSingleProducts.success({ product }));
  } catch (err) {
    console.log(err);
    yield put(getSingleProducts.failure(err));
  } finally {
    yield put(getSingleProducts.fulfill());
  }
}
export function* watchProducts() {
  yield takeLatest(getProducts.TRIGGER, getProductsSaga);
  yield takeLatest(getSingleProducts.TRIGGER, getSingleProductsSaga);
}
