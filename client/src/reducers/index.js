import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';
import appointmentReducer from './reducer_appointment';

const rootReducer = combineReducers({
  patients: patientsReducer,
  appointment: appointmentReducer
});

export default rootReducer;
