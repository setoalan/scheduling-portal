import { FETCH_PATIENTS } from '../actions/index';

const INITIAL_STATE = {
  patients: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_PATIENTS:
    return { ...state, patients: action.payload.data }
  default:
    return state;
  }
}
