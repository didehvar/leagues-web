import types from './types';

export const login = code => ({
  type: types.LOGIN,
  payload: {
    code,
  },
});

export const loginSucceeded = (token, user) => ({
  type: types.LOGIN_SUCCEEDED,
  payload: {
    token,
    ...user,
  },
});

export const loginFailed = message => ({
  type: types.LOGIN_FAILED,
  payload: {
    message,
  },
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const fetchRefreshToken = () => ({
  type: types.FETCH_REFRESH_TOKEN,
});

export const fetchRefreshTokenSucceeded = () => ({
  type: types.FETCH_REFRESH_TOKEN_SUCCEEDED,
});

export const fetchRefreshTokenFailed = message => ({
  type: types.FETCH_REFRESH_TOKEN_FAILED,
  payload: {
    message,
  },
});
