import { combineReducers } from 'redux';
import types from './types';

function current(state = {}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCEEDED:
      return { ...action.payload };

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
      return action.payload.message;

    case types.LOGIN:
    case types.LOGIN_SUCCEEDED:
    case types.LOGOUT:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  current,
  errorMessage,
});
