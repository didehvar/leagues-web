import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import types from './types';

import rounds from './rounds/reducer';
import segments from './segments/reducer';

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
        : uniq([...state, ...action.payload.originalIds]);

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

function isCreating(state = false, action = {}) {
  switch (action.type) {
    case types.CREATE_LEAGUE:
      return true;

    case types.CREATE_LEAGUE_SUCCEEDED:
    case types.CREATE_LEAGUE_FAILED:
      return false;

    default:
      return state;
  }
}

function errorMessage(state = null, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_FAILED:
    case types.FETCH_LEAGUE_FAILED:
    case types.CREATE_LEAGUE_FAILED:
      return action.payload.message;

    case types.FETCH_LEAGUES:
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE:
    case types.FETCH_LEAGUE_SUCCEEDED:
    case types.CREATE_LEAGUE:
    case types.CREATE_LEAGUE_SUCCEEDED:
      return null;

    default:
      return state;
  }
}

function created(state = {}, action = {}) {
  switch (action.type) {
    case types.CREATE_LEAGUE:
    case types.CREATE_LEAGUE_FAILED:
      return {};

    case types.CREATE_LEAGUE_SUCCEEDED:
      return Object.values(action.payload.leagues)[0];

    default:
      return state;
  }
}

function disciplines(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.disciplines };

    default:
      return state;
  }
}

function type(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUES_SUCCEEDED:
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.types };

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
  segments,

  byId,
  search,
  searchTotal,
  searchIds,
  isFetching,
  errorMessage,
  disciplines,
  type,
  points,
  isCreating,
  created,
});
