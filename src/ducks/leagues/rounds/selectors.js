const reducer = state => state.leagues.rounds;

export const getRound = (state, id) => reducer(state).byId[id] || {};

export const getRoundName = (state, id) => getRound(state, id).name;
