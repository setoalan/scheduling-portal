import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';
import appointmentReducer from './reducer_appointment';
import patientReducer from './reducer_patient';

const rootReducer = combineReducers({
  patients: patientsReducer,
  appointment: appointmentReducer,
  patient: patientReducer
});

export default rootReducer;
