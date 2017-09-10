import { combineReducers } from 'redux';

import authenticated, * as fromAuthenticated from './authenticated';
import error, * as fromError from './error';
import token from './token';

const authReducers = combineReducers({
  authenticated,
  error,
  token
});

export default authReducers;

export const getError = state => fromError.getErrorMessage(state.error);

export const isAuthenticated = state =>
  fromAuthenticated.getAuthenticated(state.authenticated);
