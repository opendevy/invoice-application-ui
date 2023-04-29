import {Dispatch} from 'redux';
import {AUTH_ACTIONS} from '../types';
import * as UserService from '../../services/user.service';
import {Tokens} from '../reducers/auth.reducer';
import {UserModel} from '../../resources/models';
import {ForgotPasswordRequest, LoginRequest, ResetPasswordRequest, UserCreateRequest} from "../../interfaces";

export const setToken = (tokens: Tokens) => ({
  type: AUTH_ACTIONS.SET_TOKEN,
  payload: { tokens },
});

export const setAccount = (account: UserModel | null) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT,
  payload: { account },
});

export const setAccountLoading = (loading: boolean) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT_LOADING,
  payload: { loading },
})

export const loginAction = (data: LoginRequest) => async (dispatch: Dispatch) => {
  try {
    const res = await UserService.login(data);
    dispatch(setToken(res));
    return res;
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const forgotPasswordAction = (data: ForgotPasswordRequest) => async (dispatch: Dispatch) => {
  try {
    return await UserService.forgotPassword(data);
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const resetPasswordAction = (data: ResetPasswordRequest) => async (dispatch: Dispatch) => {
  try {
    return await UserService.resetPassword(data);
  } catch (err) {
    console.log('err', { ...err });
  }
}

export const registerAction = (data: UserCreateRequest) => async (dispatch: Dispatch) => {
  try {
    const res = await UserService.register(data);
    dispatch(setToken(res));
    return res;
  } catch (err) {
  }
}

export const getAccountAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_ACTIONS.GET_ACCOUNT_REQUEST
  });

  try {
    const res = await UserService.fetchMe();
    dispatch(setAccount(res));
    return res;
  } catch (err) {
    dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT_ERROR
    });
  }
}
