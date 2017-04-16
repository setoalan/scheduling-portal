import axios from 'axios';

export const FETCH_PATIENTS = 'FETCH_PATIENTS';

const ROOT_URL = 'http://localhost:3100/api/patients';

export function fetchPatients() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_PATIENTS,
    payload: request
  };
}
