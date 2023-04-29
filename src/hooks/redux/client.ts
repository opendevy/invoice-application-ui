import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import {
  createClient,
  updateClient,
  deleteClient,
  fetchClients,
  setClients
} from '../../redux/actions';
import { ClientModel } from '../../resources/models';
import { ClientCreateRequest, ClientUpdateRequest, ClientDeleteRequest } from "../../interfaces";

export const useClientState = () => useSelector(({
  clientReducer
}: RootState) => clientReducer);

export const useCreateClientAction = () => {
  const dispatch = useDispatch();
  return (data: ClientCreateRequest) => dispatch(createClient(data));
}

export const useUpdateClientAction = () => {
  const dispatch = useDispatch();
  return (data: ClientUpdateRequest, _id: string) => dispatch(updateClient(_id, data));
}

export const useDeleteClientAction = () => {
  const dispatch = useDispatch();
  return (_id: string) => dispatch(deleteClient(_id));
}

export const useFetchClientsAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchClients());
}
