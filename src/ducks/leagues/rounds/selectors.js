const reducer = state => state.leagues.rounds;

export const getRound = (state, id) => reducer(state).byId[id];
