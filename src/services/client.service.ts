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

export async function updateClient(_id: string, data: ClientUpdateRequest) {
  return apiClient
    .patch(`/clients/${_id}`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function deleteClient(_id: string) {
  return apiClient
    .delete(`/clients/${_id}`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}
