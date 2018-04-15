import { normalize } from 'normalizr';
import { stringify } from 'querystring';

import api from '../utils/api';
import * as schema from './schema';
import { getLeagueSearch } from '../reducers';

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

export const fetchLeagues = query => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_LEAGUES_REQUEST' });
  let response;

  try {
    response = await dispatch(
      api(
        `leagues?${stringify({
          ...query,
          search: getLeagueSearch(getState())
        })}`
      )
    );
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'FETCH_LEAGUES_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'FETCH_LEAGUES_SUCCESS',
    response: normalize(response.data.results, schema.leagueList),
    total: response.data.total
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

export const joinLeague = id => async dispatch => {
  dispatch({ type: 'JOIN_LEAGUE_REQUEST' });
  let response;

  try {
    response = await dispatch(api(`leagues/${id}/join`));
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'JOIN_LEAGUE_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'JOIN_LEAGUE_SUCCESS',
    id,
    userId: response.data.user.id
  });
  return Promise.resolve();
};

export const leaveLeague = id => async dispatch => {
  dispatch({ type: 'LEAVE_LEAGUE_REQUEST' });
  let response;

  try {
    response = await dispatch(api(`leagues/${id}/leave`));
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'LEAVE_LEAGUE_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'LEAVE_LEAGUE_SUCCESS',
    id,
    userId: response.data.user.id
  });
  return Promise.resolve();
};

export const setSearch = search => async dispatch => {
  dispatch({ type: 'SET_LEAGUES_SEARCH', search });
};
