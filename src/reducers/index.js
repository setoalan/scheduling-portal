import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';
import usersReducer from './reducer_users';
import meReducer from './reducer_me';

const rootReducer = combineReducers({
  patients: patientsReducer,
  authenticated: usersReducer,
  me: meReducer
});

export default rootReducer;
