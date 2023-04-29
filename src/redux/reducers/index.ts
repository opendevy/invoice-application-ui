import { combineReducers } from 'redux';
import authReducer, { AuthState } from './auth.reducer';

export interface RootState {
  authReducer: AuthState
}

const rootReducer = combineReducers<RootState>({
  authReducer,
});

export default rootReducer;
