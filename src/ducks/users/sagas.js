import { call, select, put, takeLatest } from 'redux-saga/effects';

import types from './types';
import { login, fetchRefreshToken } from './api';
import * as actions from './actions';

function* doLogin({ payload }) {
  try {
    const state = yield select();
    const { token, user } = yield call(login, state, payload.code);
    yield put(actions.loginSucceeded(token, user));
  } catch (ex) {
    yield put(actions.loginFailed(ex.message));
  }
}

function* getRefreshToken() {
  try {
    const state = yield select();
    const { token } = yield call(fetchRefreshToken, state);
    yield put(actions.fetchRefreshTokenSucceeded(token));
  } catch (ex) {
    yield put(actions.fetchRefreshTokenFailed(ex.message));
  }
}

export default function* sagas() {
  yield takeLatest(types.LOGIN, doLogin);
  yield takeLatest(types.FETCH_REFRESH_TOKEN, getRefreshToken);
}
