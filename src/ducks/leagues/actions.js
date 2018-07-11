import { normalize } from 'normalizr';
import * as schema from '../schema';
import types from './types';

export const fetchLeagues = (startIndex = 0, stopIndex = 20) => ({
  type: types.FETCH_LEAGUES,
  payload: {
    startIndex,
    stopIndex,
  },
});

export const fetchLeaguesSucceeded = (leagues, total = 0) => ({
  type: types.FETCH_LEAGUES_SUCCEEDED,
  payload: {
    ...normalize(leagues, schema.leagueList).entities,
    total,
  },
});

export const fetchLeaguesFailed = error => ({
  type: types.FETCH_LEAGUES_FAILED,
  payload: {
    error,
  },
});

export const setSearch = search => ({
  type: types.SEARCH,
  payload: {
    search,
  },
});
