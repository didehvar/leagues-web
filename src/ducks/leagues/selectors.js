import { getRound } from './rounds';
import { getUser } from '../users';

const reducer = state => state.leagues;

const getDiscipline = (state, id) => reducer(state).discipline[id].name;
const getType = (state, id) => reducer(state).type[id].name;

export const getLeague = (state, id) => {
  const league = reducer(state).byId[id];
  if (!league) return {};
  return {
    ...league,
    discipline: getDiscipline(state, league.discipline),
    type: getType(state, league.type),
  };
};

export const getLeagueName = (state, id) => getLeague(state, id).name;

export const getLeagues = state =>
  Object.keys(reducer(state).byId).map(id => getLeague(state, id));

export const getUsersLeagues = (state, userId) =>
  getLeagues(state).filter(l => l.user === userId);

export const getSearchTotal = state => reducer(state).searchTotal;

export const getSearchLeagues = state =>
  reducer(state).searchIds.map(id => getLeague(state, id));

export const getSearch = state => reducer(state).search;

export const isFetching = state => reducer(state).isFetching;

export const getErrorMessage = state => reducer(state).errorMessage;

export const getRounds = (state, id) => {
  const league = getLeague(state, id);
  if (!league || !league.rounds) return [];

  return league.rounds.map(roundId => getRound(state, roundId));
};

export const getPoints = state => reducer(state).points;

export const getLeaguePoints = (state, pointIds = []) =>
  Object.values(
    pointIds.reduce((acc, pointId) => {
      const { user, points } = getPoints(state)[pointId];

      if (!acc[user]) {
        acc[user] = {
          ...getUser(state, user),
          points: 0,
        };
      }

      acc[user].points += points;
      return acc;
    }, {}),
  ).sort((a, b) => a.points < b.points);
