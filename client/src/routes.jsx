import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Users from './components/users';
import User from './components/user';
import SignIn from './components/sign_in';
import Appointments from './components/appointments';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users">
      <IndexRoute component={Users} />
      <Route path="me" component={User} />
      <Route path="sign_in" component={SignIn} />
    </Route>
    <Route path="/appointments">
      <IndexRoute component={Appointments} />>
    </Route>
  </Route>
);
