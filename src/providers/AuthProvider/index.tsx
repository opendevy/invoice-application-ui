import React, { FC, useEffect } from 'react';
import { useAuthState, useGetAccountAction, useSetTokenAction } from '../../hooks/redux';

const AuthProvider: FC = ({ children }) => {
  const { tokens, account } = useAuthState();
  const setTokens = useSetTokenAction();
  const getAccount = useGetAccountAction();

  useEffect(() => {
    setTokens({
      accessToken: localStorage.getItem('access_token'),
      refreshToken: localStorage.getItem('refresh_token')
    });
  }, []);

  useEffect(() => {
    if (tokens === undefined) {
      return;
    }

    if (typeof tokens.accessToken === "string") {
      localStorage.setItem('access_token', tokens.accessToken);
    }
    if (typeof tokens.refreshToken === "string") {
      localStorage.setItem('refresh_token', tokens.refreshToken);
    }

    if (!account) {
      getAccount();
    }
  }, [tokens, account]);

  return (
    <>
      {children}
    </>
  )
};

export default AuthProvider;
