import { LOG_IN } from '../actions/index';

const INITIAL_STATE = {
  authenticated: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_IN:
    return { ...state, authenticated: action.payload.data }
  default:
    return state;
  }
}
