import { normalize } from 'normalizr';

import api from '../utils/api';
import * as schema from './schema';

export const fetchLeague = id => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_LEAGUE_REQUEST' });
  let response;

  try {
    response = await api(`leagues/${id}`, getState());
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'FETCH_LEAGUE_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'FETCH_LEAGUE_SUCCESS',
    response: normalize(response.data, schema.league)
  });
  return Promise.resolve();
};

export const fetchLeagues = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_LEAGUES_REQUEST' });
  let response;

  try {
    response = await api('leagues', getState());
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'FETCH_LEAGUES_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'FETCH_LEAGUES_SUCCESS',
    response: normalize(response.data, schema.leagueList)
  });
  return Promise.resolve();
};
