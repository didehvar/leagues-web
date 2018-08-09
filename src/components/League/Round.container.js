import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  isFetching,
  getLeagueError,
  getLeagueType,
} from '../../ducks/leagues';
import { getRound, getSortedRoundPoints } from '../../ducks/leagues/rounds';

import Round from './Round';

export default flowRight(
  connect(
    (state, ownProps) => {
      const round = getRound(state, ownProps.match.params.roundId);

      return {
        ...round,
        isFetching: isFetching(state),
        errorMessage: getLeagueError(state),
        points: getSortedRoundPoints(state, round.id),
        type: getLeagueType(state, ownProps.match.params.id),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(Round);
