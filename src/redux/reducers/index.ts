import { combineReducers } from 'redux';
import authReducer, { AuthState } from './auth.reducer';
import clientReducer, { ClientState } from "./client.reducer";
import employeeReducer, { EmployeeState } from "./employee.reducer";

export interface RootState {
  authReducer: AuthState,
  clientReducer: ClientState,
  employeeReducer: EmployeeState
}

const rootReducer = combineReducers<RootState>({
  authReducer,
  clientReducer,
  employeeReducer
});

export default rootReducer;
