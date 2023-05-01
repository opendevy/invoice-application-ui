import { EMPLOYEE_ACTIONS } from '../types';
import { UserModel } from '../../resources/models';

export interface EmployeeState {
  employees: UserModel[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeReducer = (state: EmployeeState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEE_ACTIONS.SET_EMPLOYEES:
      return {
        ...state,
        employees: payload.employees
      };

    default:
      return state;
  }
};

export default employeeReducer;
