export interface ProjectCreateRequest {
  name: string;
  budget: string;
  client: string;
}

export interface ProjectUpdateRequest {
  name: string;
}

export interface ProjectDeleteRequest {
  name: string;
}
