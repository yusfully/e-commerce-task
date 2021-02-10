import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import history from "./history"
import AppInner from "./pages/products/products"
function Routes() {




  return (
    <Router history={history}>
    <Switch>
<AppInner></AppInner>

      </Switch>
    </Router>
  );
}





export default Routes
