import { PROJECT_ACTIONS } from '../types';
import { ProjectModel } from '../../resources/models';

export interface ProjectState {
  projects: ProjectModel[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectReducer = (state: ProjectState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case PROJECT_ACTIONS.SET_PROJECTS:
      return {
        ...state,
        projects: payload.projects
      };

    default:
      return state;
  }
};

export default projectReducer;
