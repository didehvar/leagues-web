import { normalize } from 'normalizr';

import api from '../utils/api';
import * as schema from './schema';

export const createRound = (leagueId, data) => async dispatch => {
  dispatch({ type: 'CREATE_ROUND_REQUEST' });
  let response;

  try {
    response = await dispatch(
      api(`leagues/${leagueId}/rounds`, {
        method: 'POST',
        body: {
          leagueId: leagueId,
          ...data
        }
      })
    );
  } catch (ex) {
    const { message } = await ex.response.json();
    dispatch({ type: 'CREATE_ROUND_FAILURE', message });
    return Promise.reject(ex.message);
  }

  dispatch({
    type: 'CREATE_ROUND_SUCCESS',
    response: normalize(response.data, schema.round)
  });
  return Promise.resolve();
};

export const deleteRound = (leagueId, roundId) => async dispatch => {
  dispatch({ type: 'DELETE_ROUND_REQUEST' });
  let response;

  try {
    response = await dispatch(
      api(`leagues/${leagueId}/rounds/${roundId}`, {
        method: 'DELETE'
      })
    );
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'DELETE_ROUND_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'DELETE_ROUND_SUCCESS',
    response: normalize(response.data, schema.roundList)
  });
  return Promise.resolve();
};
