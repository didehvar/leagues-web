import { normalize } from 'normalizr';
import * as schema from '../schema';
import types from './types';

export const login = code => ({
  type: types.LOGIN,
  payload: {
    code,
  },
});

export const loginSucceeded = user => ({
  type: types.LOGIN_SUCCEEDED,
  payload: {
    ...normalize(user, schema.user).entities,
  },
});

export const loginFailed = message => ({
  type: types.LOGIN_FAILED,
  payload: {
    message,
  },
});
