import { getRound } from './rounds';
import { getUser } from '../users';

const reducer = state => state.leagues;

const getDiscipline = (state, id) => reducer(state).disciplines[id].name;
const getType = (state, id) => reducer(state).type[id].name;

export const leagueById = (state, id) => reducer(state).byId[id];

export const getLeague = (state, id) => {
  const league = leagueById(state, id);
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

export const isCreating = state => reducer(state).isCreating;

export const getLeagueError = state => reducer(state).errorMessage;

export const getRounds = (state, id) => {
  const league = getLeague(state, id);
  if (!league || !league.rounds) return [];

  return league.rounds.map(roundId => getRound(state, roundId));
};

export const getPoints = state => reducer(state).points;

export const getCreatedLeague = state => reducer(state).created;

export const isLeagueOwner = (state, id, userId) =>
  (leagueById(state, id) || {}).user === userId;

export const hasLeagueType = (state, id, type) =>
  getLeague(state, id).type === type;

export const isParticipating = (state, id, userId) =>
  ((leagueById(state, id) || {}).participants || []).includes(userId);

export const getLeagueUserPoint = (state, leagueId, userId) =>
  Object.values(getPoints(state)).find(
    p => p.leagueId === leagueId && p.userId === userId,
  );

export const getSortedLeaguePoints = (state, id) => {
  const league = leagueById(state, id);
  if (!league || !league.participants) return [];

  return Object.values(
    league.participants.reduce((acc, userId) => {
      const { points = 0 } = getLeagueUserPoint(state, id, userId) || {};

      if (!acc[userId]) {
        acc[userId] = {
          ...getUser(state, userId),
          points: 0,
        };
      }

      if (points) acc[userId].points += points;

      return acc;
    }, {}),
  ).sort((a, b) => b.points - a.points);
};
