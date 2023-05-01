import apiClient from ".";
import {
  ProjectCreateRequest,
  ProjectUpdateRequest
} from "../interfaces";

export async function createProject(data: ProjectCreateRequest) {
  return apiClient
    .post('/projects', data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function fetchProjects(query?: any) {
  return apiClient
    .get('/projects', {
      params: query
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function fetchReservedProjects(employee_id: string) {
  return apiClient
    .get(`/projects/${employee_id}/reserved`)
    .then((res) => {
      if (res) {
        return res.data;
      }
      return Promise.reject();
    })
}

export async function fetchProject(id: string) {
  return apiClient
    .get(`/projects/${id}`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}

export async function updateProject(_id: string, data: ProjectUpdateRequest) {
  return apiClient
    .patch(`/projects/${_id}`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}
