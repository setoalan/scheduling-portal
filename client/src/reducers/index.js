import { combineReducers } from 'redux';

import patientsReducer from './reducer_patients';
import appointmentReducer from './reducer_appointment';
import patientReducer from './reducer_patient';
import doctorsReducer from './reducer_doctors';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  patients: patientsReducer,
  appointment: appointmentReducer,
  patient: patientReducer,
  doctors: doctorsReducer,
  auth: authReducer
});

export default rootReducer;
