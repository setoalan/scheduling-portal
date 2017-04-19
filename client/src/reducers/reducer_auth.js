import jwtDecode from 'jwt-decode';
import { hashHistory } from 'react-router';

import { LOGIN_USER, LOGIN_TOKEN, LOGOUT_USER } from '../actions/index';

const INITIAL_STATE = {
  isAuthenticated: false,
  _id: null,
  token: null,
  name: null,
  doctor: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER: {
    localStorage.setItem('token', action.payload.data.token);

    (jwtDecode(action.payload.data.token).doctor) ? hashHistory.push('/users') : hashHistory.push('/');

    return { ...state,
      isAuthenticated: true,
      token: action.payload.data.token,
      _id: jwtDecode(action.payload.data.token)._id,
      name: jwtDecode(action.payload.data.token).name,
      doctor: jwtDecode(action.payload.data.token).doctor
    };
  }
  case LOGIN_TOKEN: {
    return { ...state,
      isAuthenticated: true,
      token: action.payload,
      _id: jwtDecode(action.payload)._id,
      name: jwtDecode(action.payload).name,
      doctor: jwtDecode(action.payload).doctor
    };
  }
  case LOGOUT_USER: {
    localStorage.removeItem('token');
    return { ...state,
      isAuthenticated: false,
      token: null,
      _id: null,
      name: null,
      doctor: false
    };
  }
  default:
    return state;
  }
}
