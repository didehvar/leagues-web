import { normalize } from 'normalizr';

import api from '../utils/api';
import * as schema from './schema';

export const createRound = (leagueId, data) => async (dispatch, getState) => {
  dispatch({ type: 'CREATE_ROUND_REQUEST' });
  let response;

  try {
    response = await api(`leagues/${leagueId}/rounds`, getState(), {
      method: 'POST',
      body: {
        leagueId: leagueId,
        ...data
      }
    });
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'CREATE_ROUND_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'CREATE_ROUND_SUCCESS',
    response: normalize(response.data, schema.round)
  });
  return Promise.resolve();
};
