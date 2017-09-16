import { normalize } from 'normalizr';

import api from '../utils/api';
import * as schema from './schema';
import { getUser } from '../reducers';

export const fetchStarredSegments = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_STARRED_SEGMENTS_REQUEST' });
  let response;

  const state = getState();
  const { id } = getUser(state);

  try {
    response = await api(`users/${id}/segments/starred`, state);
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'FETCH_STARRED_SEGMENTS_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'FETCH_STARRED_SEGMENTS_SUCCESS',
    response: normalize(response.data, schema.segmentList)
  });
  return Promise.resolve();
};
