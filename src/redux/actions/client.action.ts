import { Dispatch } from 'redux';
import { CLIENT_ACTIONS } from '../types';
import * as ClientService from '../../services/client.service';
import { ClientModel } from '../../resources/models';
import {
  ClientCreateRequest,
  ClientUpdateRequest
} from '../../interfaces';

export const addClient = (client: ClientModel) => ({
  type: CLIENT_ACTIONS.ADD_CLIENT,
  payload: { client },
});

export const setClients = (clients: ClientModel[]) => ({
  type: CLIENT_ACTIONS.SET_CLIENTS,
  payload: { clients },
});

export const createClient = (data: ClientCreateRequest) => async (dispatch: Dispatch) => {
  try {
    await ClientService.createClient(data);
    const fetchRes = await ClientService.fetchClients();
    dispatch(setClients(fetchRes));
    return fetchRes;
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const updateClient = (_id: string, data: ClientUpdateRequest) => async (dispatch: Dispatch) => {
  try {
    await ClientService.updateClient(_id, data);
    const fetchRes = await ClientService.fetchClients();
    dispatch(setClients(fetchRes));
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const deleteClient = (_id: string) => async (dispatch: Dispatch) => {
  try {
    return await ClientService.deleteClient(_id);
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const fetchClients = () => async (dispatch: Dispatch) => {
  try {
    const res = await ClientService.fetchClients();
    dispatch(setClients(res));
    return res;
  } catch (err) {
  }
}
