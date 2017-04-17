import axios from 'axios';
import querystring from 'querystring';

export const LOG_IN = 'LOG_IN';
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const FETCH_USER = 'FETCH_USER';

const ROOT_URL = 'http://localhost:3100';

export function logIn(username, password) {
  const request = axios.post(`${ROOT_URL}/users/login`,
    querystring.stringify({ username, password })
  );

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

export function fetchUser() {
  const request = axios.get(`${ROOT_URL}/users/me`);

  return {
    type: FETCH_USER,
    payload: request
  };
}
