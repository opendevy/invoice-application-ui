import apiClient from ".";
import {
  ClientCreateRequest,
  ClientDeleteRequest,
  ClientUpdateRequest
} from "../interfaces";

export async function createClient(data: ClientCreateRequest) {
  return apiClient
    .post('/clients', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function fetchClients() {
  return apiClient
    .get('/clients')
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function updateClient(data: ClientUpdateRequest) {
  return apiClient
    .patch('/clients', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function deleteClient(data: ClientDeleteRequest) {
  return apiClient
    .delete('/clients/:id')
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}
