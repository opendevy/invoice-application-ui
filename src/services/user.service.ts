import apiClient from '.';
import {
  ForgotPasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  UserCreateRequest
} from '../interfaces';

export async function login(data: LoginRequest) {
  return apiClient
    .post('/auth/login', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function register(data: UserCreateRequest) {
  return apiClient
    .post('/auth/register', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function forgotPassword(data: ForgotPasswordRequest) {
  return apiClient
    .post('/auth/forgot-password', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function resetPassword(data: ResetPasswordRequest) {
  return apiClient
    .post('/auth/reset-password', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function fetchMe() {
  return apiClient
    .get('/auth/me')
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}
