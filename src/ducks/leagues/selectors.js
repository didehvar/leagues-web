const reducer = state => state.ducks.leagues;

export const getLeagues = state => reducer(state).leagues;

export const getTotal = state => reducer(state).total;
