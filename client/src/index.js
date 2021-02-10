import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  Router,
 Route,
 } from "react-router-dom"
import App from "./App";
import registerServiceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import history from "./history"
import configureStore from "./redux/store";
export const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
      <Route path="/"> <App /></Route>
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
