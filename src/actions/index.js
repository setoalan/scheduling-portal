import axios from 'axios';

export const LOG_IN = 'LOG_IN';
export const FETCH_PATIENTS = 'FETCH_PATIENTS';

const ROOT_URL = 'http://localhost:3100';

export function logIn() {
  const request = axios.post(`${ROOT_URL}/users/login`, {
    username: 'username',
    password: 'password'
  });

  return {
    type: LOG_IN,
    payload: request
  };
}

export function fetchPatients() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}
