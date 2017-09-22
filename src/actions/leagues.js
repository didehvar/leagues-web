import { normalize } from 'normalizr';

import api from '../utils/api';
import * as schema from './schema';

export const fetchLeague = id => async dispatch => {
  dispatch({ type: 'FETCH_LEAGUE_REQUEST' });
  let response;

  try {
    response = await dispatch(api(`leagues/${id}`));
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

export const fetchLeagues = () => async dispatch => {
  dispatch({ type: 'FETCH_LEAGUES_REQUEST' });
  let response;

  try {
    response = await dispatch(api('leagues'));
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

export const createLeague = data => async dispatch => {
  dispatch({ type: 'CREATE_LEAGUE_REQUEST' });
  let response;

  try {
    response = await dispatch(api('leagues', { method: 'POST', body: data }));
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'CREATE_LEAGUE_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  const league = normalize(response.data, schema.league);

  dispatch({
    type: 'CREATE_LEAGUE_SUCCESS',
    response: league
  });
  return Promise.resolve(league);
};
