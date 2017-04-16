import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';

const rootReducer = combineReducers({
  patients: patientsReducer
});

export default rootReducer;
