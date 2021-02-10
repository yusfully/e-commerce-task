import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL, SET_CURRENT_PAGE } from '../actionTypes';

export const productsFetchStart = (page) => ({
  type: FETCH_PRODUCTS_START,
  payload: page,
});
export const setActualPage = (pageNum) => ({
  type: SET_CURRENT_PAGE,
  payload: pageNum,
});
export const productsFetchSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
export const productsFetchFail = (message) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: message,
});
