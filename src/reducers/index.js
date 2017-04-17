import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';
import usersReducer from './reducer_users';

const rootReducer = combineReducers({
  patients: patientsReducer,
  authenticated: usersReducer
});

export default rootReducer;
