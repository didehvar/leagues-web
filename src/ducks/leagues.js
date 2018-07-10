import { call, select, put, takeLatest } from 'redux-saga/effects';

import { api } from './util';

export const types = {
  FETCH_LEAGUES: 'LEAGUES_FETCH_LEAGUES',
  FETCH_LEAGUES_SUCCEEDED: 'LEAGUES_FETCH_LEAGUES_SUCCEEDED',
  FETCH_LEAGUES_FAILED: 'LEAGUES_FETCH_LEAGUES_FAILED',
};

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export const getLeagues = state => state;

// actions

export const fetchLeagues = (startIndex = 0, stopIndex = 20) => dispatch =>
  dispatch({
    type: types.FETCH_LEAGUES,
    startIndex,
    stopIndex,
  });

// calls

export const apiLeagues = async state => await api('leagues', state);

// sagas

function* sagaLeagues() {
  try {
    const data = yield call(apiLeagues, yield select());
    yield put({ type: types.FETCH_LEAGUES_SUCCEEDED, data });
  } catch (ex) {
    console.error(ex);
    yield put({ type: types.FETCH_LEAGUES_FAILED, error: ex.message });
  }
}

function* watchSagas() {
  yield takeLatest(types.FETCH_LEAGUES, sagaLeagues);
}

export const sagas = {
  watchSagas,
};
