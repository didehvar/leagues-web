import { combineReducers } from 'redux';

import auth, * as fromAuth from './auth';
import leagues, * as fromLeagues from './leagues';
import rounds, * as fromRounds from './rounds';
import segments, * as fromSegments from './segments';
import users, * as fromUsers from './users';
import ducks from '../ducks/reducers';

const rootReducer = combineReducers({
  auth,
  leagues,
  rounds,
  segments,
  users,
  ducks,
});

export default rootReducer;

// Auth
export const getAuthError = state => fromAuth.getError(state.auth);

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);

export const getAuthUser = state => fromAuth.getUser(state.auth);

export const getUserToken = state => fromAuth.getUserToken(state.auth);

// Leagues
export const getLeague = (state, id) =>
  fromLeagues.getLeague(state.leagues, id);

export const getLeagues = state =>
  fromLeagues
    .getLeauges(state.leagues)
    .map(l => ({ ...l, rounds: l.rounds.map(r => getRound(state, r)) }));

export const getAllLeagues = state => fromLeagues.getAllLeagues(state.leagues);

export const getLeagueError = state => fromLeagues.getError(state.leagues);

export const getCurrentLeagueId = state =>
  fromLeagues.getCurrentLeagueId(state.leagues);

export const getCurrentLeague = state =>
  fromLeagues.getCurrentLeague(state.leagues);

export const getTotalLeagues = state =>
  fromLeagues.getTotalLeagues(state.leagues);

export const getLeagueSearch = state =>
  fromLeagues.getLeagueSearch(state.leagues);

export const getLeagueInvite = state => fromLeagues.getInvite(state.leagues);

export const getOwnedLeagues = state => {
  const user = getAuthUser(state);
  return getAllLeagues(state).filter(l => l.userId === user.id);
};

// Rounds
export const getRound = (state, id) => fromRounds.getRound(state.rounds, id);

export const getRounds = state => fromRounds.getRounds(state.rounds);

export const getLeagueRounds = (state, leagueId) => {
  const league = getLeague(state, leagueId);
  if (!league) return [];
  return league.rounds.map(roundId => getRound(state, roundId));
};

export const getRoundError = state => fromRounds.getError(state.rounds);

// Segments
export const getStarredSegments = state =>
  fromSegments.getStarredSegments(state.segments);

// Users
export const getUser = (state, id) => fromUsers.getUser(state.users, id);

export const getUsers = state => fromUsers.getUsers(state.users);

export const getParticipants = (state, id) => {
  const league = getLeague(state, id);
  if (!league || !league.participants) return [];
  return league.participants.map(p => getUser(state, p));
};

export const getPoints = (state, leagueId, roundId) => {
  const league = getLeague(state, leagueId);
  if (!league) return [];

  const points = roundId ? getRound(state, roundId).points : league.points;

  return getParticipants(state, leagueId).map(
    ({ id, avatar, firstname, lastname }) => {
      const point = points.find(p => p.userId === id) || {};
      return {
        id,
        avatar,
        name: `${firstname} ${lastname}`,
        points: point.points || 0,
      };
    }
  );
};
