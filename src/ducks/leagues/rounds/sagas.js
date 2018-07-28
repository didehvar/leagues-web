import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { createRound } from './api';
import * as actions from './actions';

function* doCreateRound({ payload }) {
  try {
    const state = yield select();
    const round = yield call(createRound, state, payload);
    yield put(actions.createRoundSucceeded(round));
  } catch (ex) {
    yield put(actions.createRoundFailed(ex.message));
  }
}

export default function* sagas() {
  yield takeLatest(types.CREATE_ROUND, doCreateRound);
}
