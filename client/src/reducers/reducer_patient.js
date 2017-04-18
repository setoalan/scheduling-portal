import { FETCH_PATIENT } from '../actions/index';

const INITIAL_STATE = {
  patient: {
    appointments: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_PATIENT:
    return { ...state, patient: action.payload.data }
  default:
    return state;
  }
}
