import { normalize } from 'normalizr';
import * as schema from '../schema';
import types from './types';

export const fetchLeagues = ({
  startIndex = 0,
  stopIndex = 20,
  userId,
  search,
} = {}) => ({
  type: types.FETCH_LEAGUES,
  payload: {
    startIndex,
    stopIndex,
    userId,
    search,
  },
});

export const fetchLeaguesSucceeded = (leagues, total = 0) => ({
  type: types.FETCH_LEAGUES_SUCCEEDED,
  payload: {
    ...normalize(leagues, schema.leagueList).entities,
    total,
  },
});

export const fetchLeaguesFailed = message => ({
  type: types.FETCH_LEAGUES_FAILED,
  payload: {
    message,
  },
});

export const fetchLeague = id => ({
  type: types.FETCH_LEAGUE,
  payload: {
    id,
  },
});

export const fetchLeagueSucceeded = league => ({
  type: types.FETCH_LEAGUE_SUCCEEDED,
  payload: normalize(league, schema.league).entities,
});

export const fetchLeagueFailed = message => ({
  type: types.FETCH_LEAGUE_FAILED,
  payload: {
    message,
  },
});

export const setSearch = search => ({
  type: types.SEARCH,
  payload: {
    search,
  },
});
