import { combineReducers } from 'redux';
import authReducer, { AuthState } from './auth.reducer';
import clientReducer, { ClientState } from "./client.reducer";
import employeeReducer, { EmployeeState } from "./employee.reducer";
import projectReducer, { ProjectState } from "./project.reducer";

export interface RootState {
  authReducer: AuthState,
  clientReducer: ClientState,
  employeeReducer: EmployeeState,
  projectReducer: ProjectState
}

const rootReducer = combineReducers<RootState>({
  authReducer,
  clientReducer,
  employeeReducer,
  projectReducer
});

export default rootReducer;
