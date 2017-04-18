import { CREATE_APPOINTMENT, UPDATE_APPOINTMENT } from '../actions/index';

const INITIAL_STATE = {
  appointment: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_APPOINTMENT:
    return { ...state, appointment: action.payload.data }
  case UPDATE_APPOINTMENT:
    return { ...state, appointment: action.payload.data }
  default:
    return state;
  }
}
