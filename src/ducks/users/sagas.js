import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { login } from './api';
import * as actions from './actions';

function* doLogin({ payload }) {
  try {
    const state = yield select();
    const data = yield call(login, state, payload.code);
    yield put(actions.loginSucceeded(data));
  } catch (ex) {
    yield put(actions.loginFailed(ex.message));
  }
}

export function* watchSagas() {
  yield takeLatest(types.LOGIN, doLogin);
}