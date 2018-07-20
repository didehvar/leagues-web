const reducer = state => state.ducks.leagues.rounds;

export const getRound = (state, id) => reducer(state).byId[id];
