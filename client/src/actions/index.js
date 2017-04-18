import axios from 'axios';

export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const FETCH_PATIENT = 'FETCH_PATIENT';

const ROOT_URL = 'http://localhost:3001';

export function fetchPatients() {
  const request = axios.get(`${ROOT_URL}/users/patients`);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}

export function fetchDoctors() {
  const request = axios.get(`${ROOT_URL}/users/doctors`);

  return {
    type: FETCH_DOCTORS,
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

export function fetchPatient(userId) {
  const request = axios.get(`${ROOT_URL}/users/${userId}`);

  return {
    type: FETCH_PATIENT,
    payload: request
  };
}
