import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  getRounds,
  isFetching,
  getLeagueError,
  getSortedLeaguePoints,
  isLeagueOwner,
  isParticipating,
  joinLeague,
} from '../../ducks/leagues';
import { getCurrentUserId } from '../../ducks/users';

import League from './League';

export default flowRight(
  connect(
    (state, ownProps) => {
      const leagueId = parseInt(ownProps.match.params.id, 10);
      const userId = getCurrentUserId(state);

      return {
        league: getLeague(state, leagueId),
        rounds: getRounds(state, leagueId),
        isFetching: isFetching(state),
        errorMessage: getLeagueError(state),
        points: getSortedLeaguePoints(state, leagueId).slice(0, 3),
        isOwner: isLeagueOwner(state, leagueId, userId),
        isParticipating: isParticipating(state, leagueId, userId),
      };
    },
    { fetch: fetchLeague, joinLeague },
  ),
  withFetchId,
)(League);
