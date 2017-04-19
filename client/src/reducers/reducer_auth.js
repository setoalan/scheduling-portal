import jwtDecode from 'jwt-decode';

import { LOGIN_USER, LOGIN_USER_FAILURE } from '../actions/index';

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
    return { ...state,
      isAuthenticated: true,
      token: action.payload.data.token,
      _id: jwtDecode(action.payload.data.token)._id,
      name: jwtDecode(action.payload.data.token).name,
      doctor: jwtDecode(action.payload.data.token).doctor
    };
  }
  default:
    return state;
  }
}
