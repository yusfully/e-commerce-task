import { all, call } from "redux-saga/effects";
import { productsSagas } from "./products.saga";

export default function* rootSaga() {
  yield all([
    call(productsSagas),

  ]);
}
