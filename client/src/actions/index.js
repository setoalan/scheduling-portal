import axios from 'axios';

export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

const ROOT_URL = 'http://localhost:3001';

export function fetchPatients() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}

export function createAppointment(appointment) {
  const request = axios.post(`${ROOT_URL}/appointments`, appointment);

  return {
    type: CREATE_APPOINTMENT,
    payload: request
  };
}
