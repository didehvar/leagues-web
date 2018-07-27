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

function searchTotal(state = 0, action = {}) {
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
      return action.payload.search === undefined
        ? state
        : uniq([...state, ...Object.keys(action.payload.leagues || {})]);

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

function discipline(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.discipline };

    default:
      return state;
  }
}

function type(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.type };

    default:
      return state;
  }
}

function points(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.points };

    default:
      return state;
  }
}

export default combineReducers({
  rounds,
  byId,
  search,
  searchTotal,
  searchIds,
  isFetching,
  errorMessage,
  discipline,
  type,
  points,
});
