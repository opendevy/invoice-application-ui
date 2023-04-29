export interface ProjectCreateRequest {
  name: string;
  budget: number;
  client: string;
}

export interface ProjectUpdateRequest {
  name: string;
}

export interface ProjectDeleteRequest {
  name: string;
}
