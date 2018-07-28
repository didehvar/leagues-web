import { normalize } from 'normalizr';
import * as schema from '../../schema';
import types from './types';

export const createRound = data => ({
  type: types.CREATE_ROUND,
  payload: data,
});

export const createRoundSucceeded = league => ({
  type: types.CREATE_ROUND_SUCCEEDED,
  payload: normalize(league, schema.round).entities,
});

export const createRoundFailed = message => ({
  type: types.CREATE_ROUND_FAILED,
  payload: {
    message,
  },
});
