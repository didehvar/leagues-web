import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  getRounds,
  isFetching,
  getLeagueError,
  getSortedPoints,
  isLeagueOwner,
} from '../../ducks/leagues';

import League from './League';

export default flowRight(
  connect(
    (state, ownProps) => {
      const leagueId = ownProps.match.params.id;
      const league = getLeague(state, leagueId);

      return {
        league,
        rounds: getRounds(state, leagueId),
        isFetching: isFetching(state),
        errorMessage: getLeagueError(state),
        points: getSortedPoints(state, league.points).slice(0, 3),
        isOwner: isLeagueOwner(state, leagueId),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(League);
