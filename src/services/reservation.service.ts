import apiClient from ".";

export async function createReservation(project_id: string, hourlyRate: number) {
  return apiClient
    .post(`/reservations/${project_id}`, { hourlyRate })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return Promise.reject();
    });
}

export async function manageReservation(reservation_id: string) {

}
