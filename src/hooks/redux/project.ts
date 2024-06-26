import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import {
  createProject,
  updateProject,
  fetchProjects
} from '../../redux/actions';
import { ProjectCreateRequest, ProjectUpdateRequest } from '../../interfaces';

export const useProjectState = () => useSelector(({
  projectReducer
}: RootState) => projectReducer);

export const useCreateProjectAction = () => {
  const dispatch = useDispatch();
  return (data: ProjectCreateRequest) => dispatch(createProject(data));
}

export const useUpdateProjectAction = () => {
  const dispatch = useDispatch();
  return (data: ProjectUpdateRequest, _id: string) => dispatch(updateProject(_id, data));
}

export const useFetchProjectsAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchProjects());
}
