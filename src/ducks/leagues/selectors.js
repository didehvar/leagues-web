import { getRound } from './rounds';

const reducer = state => state.ducks.leagues;

export const getLeague = (state, id) => reducer(state).byId[id];
export const getLeagueName = (state, id) => getLeague(state, id).name;

export const getLeagues = state => Object.values(reducer(state).byId);

export const getSearchLeagues = state =>
  reducer(state).searchIds.map(id => getLeague(state, id));

export const getTotal = state => reducer(state).total;

export const getSearch = state => reducer(state).search;

export const isFetching = state => reducer(state).isFetching;

export const errorMessage = state => reducer(state).errorMessage;

export const getRounds = (state, id) => {
  const league = getLeague(state, id);
  if (!league || !league.rounds) return [];

  return league.rounds.map(roundId => getRound(state, roundId));
};
