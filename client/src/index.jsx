import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';
import { loginToken } from './actions';

let createStoreWithMiddleware;

const middleware = applyMiddleware(promise);

createStoreWithMiddleware = compose(middleware);

const store = createStoreWithMiddleware(createStore)(reducers, window.__INITIAL_STATE__);

// get token if user has signed in before
let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginToken(token));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);
