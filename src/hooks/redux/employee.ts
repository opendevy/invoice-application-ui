import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  fetchEmployees,
  setEmployees
} from '../../redux/actions';
import { EmployeeModel } from '../../resources/models';
import { EmployeeCreateRequest, EmployeeUpdateRequest, EmployeeDeleteRequest } from "../../interfaces";

export const useEmployeeState = () => useSelector(({
  employeeReducer
}: RootState) => employeeReducer);

export const useCreateEmployeeAction = () => {
  const dispatch = useDispatch();
  return (data: EmployeeCreateRequest) => dispatch(createEmployee(data));
}

export const useUpdateEmployeeAction = () => {
  const dispatch = useDispatch();
  return (data: EmployeeUpdateRequest, _id: string) => dispatch(updateEmployee(_id, data));
}

export const useDeleteEmployeeAction = () => {
  const dispatch = useDispatch();
  return (_id: string) => dispatch(deleteEmployee(_id));
}

export const useFetchEmployeesAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchEmployees());
}
