import apiClient from ".";

export async function startWork(project_id: string) {
  return apiClient
    .post(`/work-histories/${project_id}/start`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}

export async function endWork(work_history_id: string) {
  return apiClient
    .post(`/work-histories/${work_history_id}/end`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}

export async function fetchWorkHistories(query: any) {
  return apiClient
    .get('/work-histories', {
      params: query
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}

export async function fetchProjectWorkHistory(user_id: string, project_id: string) {
  return apiClient
    .get(`/work-histories/${user_id}/${project_id}`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}

export async function fetchOwnProjectWorkHistory(project_id: string) {
  return apiClient
    .get(`/work-histories/${project_id}`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    })
}
