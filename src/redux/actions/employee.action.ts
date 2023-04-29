import { Dispatch } from 'redux';
import { EMPLOYEE_ACTIONS } from '../types';
import * as EmployeeService from '../../services/employee.service';
import { EmployeeModel } from '../../resources/models';
import {
  EmployeeCreateRequest,
  EmployeeUpdateRequest,
  EmployeeDeleteRequest
} from "../../interfaces";

export const addEmployee = (employee: EmployeeModel) => ({
  type: EMPLOYEE_ACTIONS.ADD_EMPLOYEE,
  payload: { employee },
});

export const setEmployees = (employees: EmployeeModel[]) => ({
  type: EMPLOYEE_ACTIONS.SET_EMPLOYEES,
  payload: { employees },
});

export const createEmployee = (data: EmployeeCreateRequest) => async (dispatch: Dispatch) => {
  try {
    await EmployeeService.createEmployee(data);
    const fetchRes = await EmployeeService.fetchEmployees();
    dispatch(setEmployees(fetchRes));
    return fetchRes;
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const updateEmployee = (_id: string, data: EmployeeUpdateRequest) => async (dispatch: Dispatch) => {
  try {
    await EmployeeService.updateEmployee(_id, data);
    const fetchRes = await EmployeeService.fetchEmployees();
    dispatch(setEmployees(fetchRes));
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const deleteEmployee = (_id: string) => async (dispatch: Dispatch) => {
  try {
    return await EmployeeService.deleteEmployee(_id);
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const fetchEmployees = () => async (dispatch: Dispatch) => {
  try {
    const res = await EmployeeService.fetchEmployees();
    dispatch(setEmployees(res));
    return res;
  } catch (err) {
  }
}
