import axios from 'axios';
import querystring from 'querystring';

export const FETCH_PATIENTS = 'FETCH_PATIENTS';

const ROOT_URL = 'http://localhost:3001';

export function fetchPatients() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}
