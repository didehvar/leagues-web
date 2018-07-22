import { combineReducers } from 'redux';
import types from './types';

function current(state = {}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCEEDED:
      return { ...action.payload };

    case types.LOGIN:
    case types.LOGIN_FAILED:
      return {};

    default:
      return state;
  }
}

export default combineReducers({
  current,
});
