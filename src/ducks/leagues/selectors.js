const reducer = state => state.ducks.leagues;

export const getLeague = (state, id) => reducer(state).byId[id];

export const getLeagues = state => Object.values(reducer(state).byId);

export const getSearchLeagues = state =>
  reducer(state).searchIds.map(id => getLeague(state, id));

export const getTotal = state => reducer(state).total;

export const getSearch = state => reducer(state).search;
