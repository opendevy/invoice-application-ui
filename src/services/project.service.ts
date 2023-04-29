import apiClient from ".";
import {
  ProjectCreateRequest,
  ProjectDeleteRequest,
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

export async function fetchProjects(id?: string) {
  return apiClient
    .get('/projects', {
      params: { id }
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
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