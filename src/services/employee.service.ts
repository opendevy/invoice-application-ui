import apiClient from ".";
import {
  EmployeeCreateRequest,
  EmployeeDeleteRequest,
  EmployeeUpdateRequest
} from "../interfaces";

export async function createEmployee(data: EmployeeCreateRequest) {
  return apiClient
    .post('/employees', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function fetchEmployees() {
  return apiClient
    .get('/employees')
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function updateEmployee(_id: string, data: EmployeeUpdateRequest) {
  return apiClient
    .patch(`/employees/${_id}`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function deleteEmployee(_id: string) {
  return apiClient
    .delete(`/employees/${_id}`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}
