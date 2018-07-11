import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { fetchLeagues } from './api';
import { fetchLeaguesSucceeded, fetchLeaguesFailed, getSearch } from './';

function* getLeagues({ payload }) {
  try {
    const state = yield select();
    const { results, total } = yield call(fetchLeagues, state, {
      ...payload,
      search: getSearch(state),
    });
    yield put(fetchLeaguesSucceeded(results, total));
  } catch (ex) {
    yield put(fetchLeaguesFailed(ex.message));
  }
}

export function* watchSagas() {
  yield takeLatest(types.FETCH_LEAGUES, getLeagues);
  yield takeLatest(types.SEARCH, getLeagues);
}
