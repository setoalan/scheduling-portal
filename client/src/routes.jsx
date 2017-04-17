import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Users from './components/users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users" component={Users} />
  </Route>
);
