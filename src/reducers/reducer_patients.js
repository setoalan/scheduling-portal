import { FETCH_PATIENTS } from '../actions/index';

const INITIAL_STATE = {
  all: {
    patients: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_PATIENTS:
    return { ...state, all: action.payload.data }
  default:
    return state;
  }
}
