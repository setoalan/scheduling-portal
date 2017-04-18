import { FETCH_DOCTORS } from '../actions/index';

const INITIAL_STATE = {
  doctors: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DOCTORS:
    return { ...state, doctors: action.payload.data }
  default:
    return state;
  }
}
