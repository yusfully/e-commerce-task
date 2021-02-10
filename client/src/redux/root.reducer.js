import { combineReducers } from "redux";
import productsReducer from "./reducers/products.reducer";
import basketReducer from "./reducers/basket.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart:basketReducer,
});

export default rootReducer;
