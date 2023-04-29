import { AUTH_ACTIONS } from '../types';
import { UserModel } from '../../resources/models';

export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthState {
  tokens: Tokens | undefined;
  account: UserModel | null;
}

const initialState: AuthState = {
  tokens: undefined,
  account: null,
};

const authReducer = (state: AuthState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.SET_TOKEN:
      return {
        ...state,
        tokens: payload.tokens,
      };

    case AUTH_ACTIONS.SET_ACCOUNT:
      return {
        ...state,
        account: payload.account,
        loadingAccount: false,
      };

    default:
      return state;
  }
};

export default authReducer;
