import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { fetchLeagues, fetchLeague } from './api';
import * as actions from './actions';
import * as selectors from './selectors';

function* getLeagues({ payload }) {
  try {
    const state = yield select();
    const { results, total } = yield call(fetchLeagues, state, {
      ...payload,
      search: selectors.getSearch(state),
    });
    yield put(actions.fetchLeaguesSucceeded(results, total));
  } catch (ex) {
    yield put(actions.fetchLeaguesFailed(ex.message));
  }
}

function* getLeague({ payload: { id } }) {
  try {
    const state = yield select();
    const { results, total } = yield call(fetchLeague, state, id);
    yield put(actions.fetchLeagueSucceeded(results, total));
  } catch (ex) {
    yield put(actions.fetchLeagueFailed(ex.message));
  }
}

export function* watchSagas() {
  yield takeLatest(types.FETCH_LEAGUES, getLeagues);
  yield takeLatest(types.FETCH_LEAGUE, getLeague);
  yield takeLatest(types.SEARCH, getLeagues);
}
