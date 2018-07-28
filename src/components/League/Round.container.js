import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  isFetching,
  getErrorMessage,
  getSortedPoints,
} from '../../ducks/leagues';
import { getRound } from '../../ducks/leagues/rounds';

import Round from './Round';

export default flowRight(
  connect(
    (state, ownProps) => {
      const round = getRound(state, ownProps.match.params.roundId);
      console.log('round points', round.points);

      return {
        isFetching: isFetching(state),
        errorMessage: getErrorMessage(state),
        ...round,
        points: getSortedPoints(state, round.points),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(Round);
