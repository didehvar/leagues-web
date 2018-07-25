import { combineReducers } from 'redux';
import types from './types';

function byId(state = {}, action = {}) {
  if (action.payload && action.payload.users) {
    return { ...state, ...action.payload.users };
  }

  return state;
}

function current(state = {}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCEEDED:
      return { ...action.payload };

    case types.FETCH_REFRESH_TOKEN:
      return { ...state, lastRefresh: new Date() };

    case types.LOGIN:
    case types.LOGIN_FAILED:
    case types.LOGOUT:
      return {};

    default:
      return state;
  }
}

function errorMessage(state = null, action = {}) {
  switch (action.type) {
    case types.LOGIN_FAILED:
    case types.FETCH_REFRESH_TOKEN_FAILED:
      return action.payload.message;

    case types.LOGIN:
    case types.LOGIN_SUCCEEDED:
    case types.LOGOUT:
    case types.FETCH_REFRESH_TOKEN:
    case types.FETCH_REFRESH_TOKEN_SUCCEEDED:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  current,
  errorMessage,
});
