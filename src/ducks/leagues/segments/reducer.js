import { combineReducers } from 'redux';
import leagueTypes from '../types';
import types from './types';

function byId(state = {}, action = {}) {
  switch (action.type) {
    case leagueTypes.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.segments };

    default:
      return state;
  }
}

function starredById(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_STARRED_SEGMENTS_SUCCEEDED:
      return { ...state, ...action.payload.starredSegments };

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  starredById,
});
