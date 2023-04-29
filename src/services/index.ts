import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api'
});

apiClient.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const { config, response } = error;
    if (response.status === 401) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        throw error;
      }

      return apiClient
        .post('/auth/refresh', {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res) {
            localStorage.setItem('access_token', res.data.accessToken);
            localStorage.setItem('refresh_token', res.data.refreshToken);
            return apiClient.request(config);
          }
          throw error;
        })
        .catch(() => {
          throw error;
        });
    }
    throw error;
  },
);

export default apiClient;
