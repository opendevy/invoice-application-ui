import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import {
  getAccountAction,
  loginAction,
  setAccount,
  setAccountLoading,
  setToken,
  registerAction,
  forgotPasswordAction,
  resetPasswordAction
} from '../../redux/actions';
import { Tokens } from '../../redux/reducers/auth.reducer';
import { UserModel } from '../../resources/models';
import { ForgotPasswordRequest, LoginRequest, ResetPasswordRequest, UserCreateRequest } from '../../interfaces';

export const useAuthState = () => useSelector(({
  authReducer
}: RootState) => authReducer);

export const useLoginAction = () => {
  const dispatch = useDispatch();
  return (data: LoginRequest) => dispatch(loginAction(data));
}

export const useForgotPasswordAction = () => {
  const dispatch = useDispatch();
  return (data: ForgotPasswordRequest) => dispatch(forgotPasswordAction(data));
}

export const useResetPasswordAction = () => {
  const dispatch = useDispatch();
  return (data: ResetPasswordRequest) => dispatch(resetPasswordAction(data));
}

export const useRegisterAction = () => {
  const dispatch = useDispatch();
  return (data: UserCreateRequest) => dispatch(registerAction(data));
}

export const useSetTokenAction = () => {
  const dispatch = useDispatch();
  return (tokens: Tokens) => dispatch(setToken(tokens));
}

export const useSetAccountAction = () => {
  const dispatch = useDispatch();
  return (account: UserModel) => dispatch(setAccount(account));
}

export const useGetAccountAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(getAccountAction());
};

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(setAccount(null));
    dispatch(setToken({
      accessToken: null,
      refreshToken: null,
    }));
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
};

export const useSetAccountLoading = () => {
  const dispatch = useDispatch();
  return (loading: boolean) => dispatch(setAccountLoading(loading));
};
