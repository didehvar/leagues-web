import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import types from './types';

import rounds from './rounds/reducer';

function byId(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
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

function isFetching(state = false, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES:
    case types.FETCH_LEAGUE:
      return true;

    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
    case types.FETCH_LEAGUES_FAILED:
    case types.FETCH_LEAGUE_FAILED:
      return false;

    default:
      return state;
  }
}

function errorMessage(state = null, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_FAILED:
    case types.FETCH_LEAGUE_FAILED:
      return action.payload.message;

    case types.FETCH_LEAGUES:
    case types.FETCH_LEAGUE:
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  total,
  search,
  searchIds,
  isFetching,
  errorMessage,
  rounds,
});
