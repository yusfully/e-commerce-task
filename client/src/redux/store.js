import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas/root.saga';
import rootReducer from './root.reducer';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, composeWithDevTools(...enhancers));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
