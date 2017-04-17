import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Users from './containers/users';
import Login from './containers/login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="users" component={Users} />
    <Route path="users/login" component={Login} />
  </Route>
);
