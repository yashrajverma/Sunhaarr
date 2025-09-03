import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getProducts,
  getSingleProducts,
  getSearch,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../routines";
import Api from "../api";

export function* addProductSaga({ payload }) {
  try {
    yield put(addProduct.request());
    const productData = payload;
    const response = yield call(Api.addProduct, productData);
    yield put(addProduct.success(response));
  } catch (err) {
    console.log(err);
    yield put(addProduct.failure(err));
  } finally {
    yield put(addProduct.fulfill());
  }
}

export function* updateProductSaga({ payload }) {
  try {
    yield put(updateProduct.request());
    const productData = payload;
    const response = yield call(Api.updateProduct, productData);
    yield put(updateProduct.success(response));
  } catch (err) {
    console.log(err);
    yield put(updateProduct.failure(err));
  } finally {
    yield put(updateProduct.fulfill());
  }
}

export function* deleteProductSaga({ payload }) {
  try {
    yield put(deleteProduct.request());
    const response = yield call(Api.deleteProduct, payload);
    yield put(deleteProduct.success(response));
  } catch (err) {
    console.log(err);
    yield put(deleteProduct.failure(err));
  } finally {
    yield put(deleteProduct.fulfill());
  }
}

export function* getProductsSaga({ payload }) {
  try {
    yield put(getProducts.request());
    const { category, pageSize, page } = payload;

    const { products } = yield call(Api.getProducts, {
      category,
      pageSize,
      page,
    });
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

export function* getSearchResult({ payload }) {
  try {
    yield put(getSearch.request());
    const { query } = payload;
    const { products } = yield call(Api.getSearch, {
      query,
    });
    yield put(getSearch.success({ products }));
  } catch (err) {
    console.error(err);
    yield put(getSearch.failure(err));
  }
}
export function* watchProducts() {
  yield takeLatest(getProducts.TRIGGER, getProductsSaga);
  yield takeLatest(getSingleProducts.TRIGGER, getSingleProductsSaga);
  yield takeEvery(getSearch.TRIGGER, getSearchResult);
  yield takeEvery(addProduct.TRIGGER, addProductSaga);
  yield takeEvery(updateProduct.TRIGGER, updateProductSaga);
  yield takeEvery(deleteProduct.TRIGGER, deleteProductSaga);
}
