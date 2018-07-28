import { combineReducers } from 'redux';
import leagueTypes from '../types';
import types from './types';

function byId(state = {}, action = {}) {
  switch (action.type) {
    case leagueTypes.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.rounds };

    default:
      return state;
  }
}

function isCreating(state = false, action = {}) {
  switch (action.type) {
    case types.CREATE_ROUND:
      return true;

    case types.CREATE_ROUND_SUCCEEDED:
    case types.CREATE_ROUND_FAILED:
      return false;

    default:
      return state;
  }
}

function errorMessage(state = null, action = {}) {
  switch (action.type) {
    case types.CREATE_ROUND_FAILED:
      return action.payload.message;

    case types.CREATE_ROUND:
    case types.CREATE_ROUND_SUCCEEDED:
      return null;

    default:
      return state;
  }
}

function created(state = {}, action = {}) {
  switch (action.type) {
    case types.CREATE_ROUND:
    case types.CREATE_ROUND_FAILED:
      return {};

    case types.CREATE_ROUND_SUCCEEDED:
      return Object.values(action.payload.leagues)[0];

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  isCreating,
  errorMessage,
  created,
});
