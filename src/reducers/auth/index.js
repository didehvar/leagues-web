import { combineReducers } from 'redux';

import error, * as fromError from './error';
import token, * as fromToken from './token';
import user, * as fromUser from './user';

const authReducers = combineReducers({
  error,
  token,
  user
});

export default authReducers;

export const isAuthenticated = state =>
  fromToken.getToken(state.token) ? true : false;

export const getError = state => fromError.getErrorMessage(state.error);

export const getUser = state => fromUser.getUser(state.user);

export const getUserToken = state => fromToken.getToken(state.token);
