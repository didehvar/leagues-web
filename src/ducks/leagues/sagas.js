import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { fetchLeagues } from './api';

function* getLeagues() {
  try {
    const payload = yield call(fetchLeagues, yield select());
    yield put({ type: types.FETCH_LEAGUES_SUCCEEDED, payload });
  } catch (ex) {
    yield put({ type: types.FETCH_LEAGUES_FAILED, error: ex.message });
  }
}

export function* watchSagas() {
  yield takeLatest(types.FETCH_LEAGUES, getLeagues);
}
