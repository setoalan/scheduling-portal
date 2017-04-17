import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Users from './containers/users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="users" component={Users} />
  </Route>
);
