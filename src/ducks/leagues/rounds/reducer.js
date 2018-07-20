import { combineReducers } from 'redux';
import types from '../types';

function byId(state = {}, action = {}) {
  switch (action.type) {
    case types.FETCH_LEAGUE_SUCCEEDED:
      return { ...state, ...action.payload.rounds };

    default:
      return state;
  }
}

export default combineReducers({
  byId,
});
