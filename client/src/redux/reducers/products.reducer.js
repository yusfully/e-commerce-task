import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL, SET_CURRENT_PAGE } from '../actionTypes';

const INITIAL_STATE = {
  products: null,
  isFetching: false,
  errorMessage: null,
  total: 0,
  actualPage: 1,
  filters: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,

        errorMessage: null,
      };

    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        actualPage: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
