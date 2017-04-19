import axios from 'axios';
import { hashHistory } from 'react-router';

export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const UPLOAD_FILE = 'UPLOAD_FILE';

const ROOT_URL = 'http://localhost:3001';

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

export function loginToken(token) {
  localStorage.setItem('token', token);

  return {
    type: LOGIN_TOKEN,
    payload: token
  };
}

export function loginUser(user, redirect = '/') {
  const request = axios.post(`${ROOT_URL}/auth/login`, user);

  hashHistory.push(redirect);

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null
  };
}

export function updateAppointment(appointment) {
  const request = axios.put(`${ROOT_URL}/appointments/${appointment._id}`, appointment);

  return {
    type: UPDATE_APPOINTMENT,
    payload: request
  };
}

export function uploadFile() {
  console.log('Uploading file... (not yet implemented)');

  return {
    type: UPLOAD_FILE,
    payload: null
  };
}
