import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  isFetching,
  getLeagueError,
  getSortedPoints,
} from '../../ducks/leagues';
import { getRound } from '../../ducks/leagues/rounds';

import Round from './Round';

export default flowRight(
  connect(
    (state, ownProps) => {
      const round = getRound(state, ownProps.match.params.roundId);

      return {
        ...round,
        isFetching: isFetching(state),
        errorMessage: getLeagueError(state),
        points: getSortedPoints(state, round.points),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(Round);
