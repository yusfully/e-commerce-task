import React, { useEffect, useState, Fragment } from 'react';

import '../src/scss/index.scss';
import { Route, useParams } from 'react-router-dom';
import history from './history';
import Header from './containers/topBar/Header';
import Products from './pages/products';

function App() {
  const params = useParams();

  useEffect(() => {
    debugger;
    if (!params.category) {
      history.push('/products/mug');
    } else {
    }
  }, []);
  return (
    <Fragment>
      <Header></Header>
      <Route path='/products/:category'>
        <Products></Products>
      </Route>
    </Fragment>
  );
}

export default App;
