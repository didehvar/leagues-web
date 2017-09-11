import { combineReducers } from 'redux';

import auth, * as fromAuth from './auth';
import leagues, * as fromLeagues from './leagues';
import segments, * as fromSegments from './segments';

const rootReducer = combineReducers({
  auth,
  leagues,
  segments
});

export default rootReducer;

// Auth
export const getAuthError = state => fromAuth.getError(state.auth);

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);

export const getUser = state => fromAuth.getUser(state.auth);

export const getUserToken = state => fromAuth.getUserToken(state.auth);

// Leagues
export const getLeague = (state, id) =>
  fromLeagues.getLeague(state.leagues, id);

export const getLeagues = state => fromLeagues.getLeauges(state.leagues);

// Segments
export const getStarredSegments = state =>
  fromSegments.getStarredSegments(state.segments);
