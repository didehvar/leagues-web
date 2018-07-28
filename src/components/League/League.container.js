import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  getRounds,
  isFetching,
  getErrorMessage,
  getSortedPoints,
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
        errorMessage: getErrorMessage(state),
        points: getSortedPoints(state, league.points).slice(0, 3),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(League);
