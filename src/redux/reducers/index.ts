import { combineReducers } from 'redux';
import authReducer, { AuthState } from './auth.reducer';
import clientReducer, { ClientState } from "./client.reducer";

export interface RootState {
  authReducer: AuthState,
  clientReducer: ClientState
}

const rootReducer = combineReducers<RootState>({
  authReducer,
  clientReducer
});

export default rootReducer;
