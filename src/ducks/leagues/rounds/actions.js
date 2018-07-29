import { normalize } from 'normalizr';
import * as schema from '../../schema';
import types from './types';

export const createRound = data => ({
  type: types.CREATE_ROUND,
  payload: data,
});

export const createRoundSucceeded = round => ({
  type: types.CREATE_ROUND_SUCCEEDED,
  payload: normalize(round, schema.round).entities,
});

export const createRoundFailed = message => ({
  type: types.CREATE_ROUND_FAILED,
  payload: {
    message,
  },
});
