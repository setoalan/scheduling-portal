import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Users from './components/users';
import Login from './components/login';
import Me from './components/me';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="users" component={Users} />
    <Route path="users/login" component={Login} />
    <Route path="users/me" component={Me} />
  </Route>
);
