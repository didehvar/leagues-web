import { call, select, put, throttle, takeLatest } from 'redux-saga/effects';

import types from './types';
import { fetchLeagues, fetchLeague } from './api';
import * as actions from './actions';

function* getLeagues({ payload }) {
  try {
    const state = yield select();
    const { results, total } = yield call(fetchLeagues, state, payload);
    yield put(actions.fetchLeaguesSucceeded(results, total, payload));
  } catch (ex) {
    yield put(actions.fetchLeaguesFailed(ex.message));
  }
}

function* getLeague({ payload: { id } }) {
  try {
    const state = yield select();
    const league = yield call(fetchLeague, state, id);
    yield put(actions.fetchLeagueSucceeded(league));
  } catch (ex) {
    yield put(actions.fetchLeagueFailed(ex.message));
  }
}

export default function* sagas() {
  yield takeLatest(types.FETCH_LEAGUES, getLeagues);
  yield takeLatest(types.FETCH_LEAGUE, getLeague);
}
