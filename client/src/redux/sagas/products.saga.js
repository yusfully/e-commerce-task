import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api';
import { productsFetchSuccess } from '../actions/products.action';
import { FETCH_PRODUCTS_START } from '../actionTypes';

export function* onFetchProductsStart(action) {
  const response = yield api.get(`/items`);

  const count = response.data.reduce(function (r, a) {
    if (!r[a.itemType]) {
      r[a.itemType] = [];
    }

    r[a.itemType] = [...r[a.itemType], a];
    return r;
  }, {});

  yield put(productsFetchSuccess({ ...count }));
}

export function* productsFetchStart() {
  yield takeLatest(FETCH_PRODUCTS_START, onFetchProductsStart);
}

export function* productsSagas() {
  yield all([call(productsFetchStart)]);
}
