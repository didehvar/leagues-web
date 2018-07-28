import { call, select, put, throttle } from 'redux-saga/effects';

import types from './types';
import { fetchStarredSegments } from './api';
import * as actions from './actions';

function* getStarredSegments({ payload }) {
  try {
    const state = yield select();
    const segments = yield call(fetchStarredSegments, state, payload);
    yield put(actions.fetchStarredSegmentsSucceeded(segments, payload));
  } catch (ex) {
    yield put(actions.fetchStarredSegmentsFailed(ex.message));
  }
}

export default function* sagas() {
  yield throttle(5000, types.FETCH_STARRED_SEGMENTS, getStarredSegments);
}
