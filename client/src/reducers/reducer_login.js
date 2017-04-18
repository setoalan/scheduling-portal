import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  authActions: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, authActions: action.payload.data }
  default:
    return state;
  }
}
