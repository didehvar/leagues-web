import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import types from './types';

function byId(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
      return { ...state, ...action.payload.leagues };
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

function search(state = '', action = {}) {
  switch (action.type) {
    case types.SEARCH:
      return action.payload.search;
    default:
      return state;
  }
}

function searchIds(state = [], action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
      return uniq([...state, ...Object.keys(action.payload.leagues || {})]);
    case types.SEARCH:
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  total,
  search,
  searchIds,
});
