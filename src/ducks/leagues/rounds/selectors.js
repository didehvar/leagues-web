import { getSegment } from '../segments';
import { leagueById, getPoints } from '../';
import { getUser } from '../../users';

const reducer = state => state.leagues.rounds;

export const roundById = (state, id) => reducer(state).byId[id];

export const getRound = (state, id) => {
  const round = roundById(state, id);
  if (!round) return { segment: {} };

  return {
    ...round,
    segment: getSegment(state, round.segment) || {},
  };
};

export const getRoundName = (state, id) => getRound(state, id).name;

export const isCreatingRound = state => reducer(state).isCreating;

export const getCreatedRound = state => reducer(state).created;

export const getRoundError = state => reducer(state).errorMessage;

export const getRoundUserPoint = (state, roundId, userId) =>
  Object.values(getPoints(state)).find(
    p => p.roundId === roundId && p.userId === userId,
  );

export const getSortedRoundPoints = (state, id) => {
  const round = roundById(state, id);
  const league = leagueById(state, round.leagueId) || {};

  if (!round || !league.participants) return [];

  return Object.values(
    league.participants.reduce((acc, userId) => {
      const { points = 0 } = getRoundUserPoint(state, id, userId) || {};

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
