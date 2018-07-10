import { call, select, put, takeLatest } from 'redux-saga/effects';

import { leagues } from '../api/leagues';
import { types } from '../ducks/leagues';

function* fetchLeagues() {
  try {
    const data = yield call(leagues, yield select());
    yield put({ type: types.FETCH_LEAGUES_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.FETCH_LEAGUES_FAILED, error });
  }
}

export function* watchFetchLeagues() {
  yield takeLatest(types.FETCH_LEAGUES, fetchLeagues);
}
