import jwtDecode from 'jwt-decode';

import { LOGIN_USER, LOGIN_USER_FAILURE } from '../actions/index';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
  name: null,
  doctor: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER: {
    return { ...state,
      isAuthenticated: true,
      token: action.payload.data.token,
      name: jwtDecode(action.payload.data.token).name,
      doctor: jwtDecode(action.payload.data.token).doctor
    };
  }
  case LOGIN_USER_FAILURE: {
    return state.merge(INITIAL_STATE);
  }
  default:
    return state;
  }
}
