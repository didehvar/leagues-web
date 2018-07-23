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
