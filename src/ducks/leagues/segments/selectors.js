const reducer = state => state.leagues.segments;

export const getSegment = (state, id) => reducer(state).byId[id] || {};

export const getStarredSegments = state =>
  Object.values(reducer(state).starredById);
