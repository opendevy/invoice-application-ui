import { Dispatch } from 'redux';
import { PROJECT_ACTIONS } from '../types';
import * as ProjectService from '../../services/project.service';
import { ProjectModel } from '../../resources/models';
import {
  ProjectCreateRequest,
  ProjectUpdateRequest
} from "../../interfaces";

export const addProject = (project: ProjectModel) => ({
  type: PROJECT_ACTIONS.ADD_PROJECT,
  payload: { project },
});

export const setProjects = (projects: ProjectModel[]) => ({
  type: PROJECT_ACTIONS.SET_PROJECTS,
  payload: { projects },
});

export const createProject = (data: ProjectCreateRequest) => async (dispatch: Dispatch) => {
  try {
    await ProjectService.createProject(data);
    const fetchRes = await ProjectService.fetchProjects();
    dispatch(setProjects(fetchRes));
    return fetchRes;
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const updateProject = (_id: string, data: ProjectUpdateRequest) => async (dispatch: Dispatch) => {
  try {
    await ProjectService.updateProject(_id, data);
    const fetchRes = await ProjectService.fetchProjects();
    dispatch(setProjects(fetchRes));
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const fetchProjects = () => async (dispatch: Dispatch) => {
  try {
    const res = await ProjectService.fetchProjects();
    dispatch(setProjects(res));
    return res;
  } catch (err) {
  }
}
