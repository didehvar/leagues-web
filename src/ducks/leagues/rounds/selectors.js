import { getSegment } from '../segments';

const reducer = state => state.leagues.rounds;

export const getRound = (state, id) => {
  const round = reducer(state).byId[id];
  if (!round) return { segment: {} };

  return {
    ...round,
    segment: getSegment(state, round.segment) || {},
  };
};

export const getRoundName = (state, id) => getRound(state, id).name;
