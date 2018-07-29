import { normalize } from 'normalizr';
import * as schema from '../../schema';
import types from './types';

export const fetchStarredSegments = data => ({
  type: types.FETCH_STARRED_SEGMENTS,
  payload: data,
});

export const fetchStarredSegmentsSucceeded = segments => ({
  type: types.FETCH_STARRED_SEGMENTS_SUCCEEDED,
  payload: normalize(segments, schema.starredSegments).entities,
});

export const fetchStarredSegmentsFailed = message => ({
  type: types.FETCH_STARRED_SEGMENTS_FAILED,
  payload: {
    message,
  },
});
