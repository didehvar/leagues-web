import types from './types';

export const fetchLeagues = (startIndex = 0, stopIndex = 20) => dispatch =>
  dispatch({
    type: types.FETCH_LEAGUES,
    payload: {
      startIndex,
      stopIndex,
    },
  });
