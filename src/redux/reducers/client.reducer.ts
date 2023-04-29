import { CLIENT_ACTIONS } from '../types';
import { ClientModel } from '../../resources/models';

export interface ClientState {
  clients: ClientModel[];
}

const initialState: ClientState = {
  clients: [],
};

const clientReducer = (state: ClientState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CLIENT_ACTIONS.SET_CLIENTS:
      return {
        ...state,
        clients: payload.tokens,
      };

    default:
      return state;
  }
};

export default clientReducer;
