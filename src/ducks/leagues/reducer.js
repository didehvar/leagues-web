import { combineReducers } from 'redux';
import types from './types';

function leagues(state = [], action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
      return action.payload.results;
    default:
      return state;
  }
}

function total(state = 0, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
      return action.payload.total;
    default:
      return state;
  }
}

export default combineReducers({
  leagues,
  total,
});
