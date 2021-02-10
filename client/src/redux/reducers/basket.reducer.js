import {
  TOGGLE_BASKET_VISIBLE,
  ADD_ITEM_BASKET,
  CLEAR_ITEM_FROM_BASKET,
  REMOVE_ITEM,
  CLEAR_BASKET,
} from '../actionTypes';
import { addItemToCart, removeItemFromCart } from './cartHelpers.reducer';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BASKET_VISIBLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM_BASKET:
      debugger;
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_BASKET:
      return {
        ...state,
        cartItems: [],
      };
    case CLEAR_ITEM_FROM_BASKET:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
